package internal

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/gocolly/colly"
)

type CourserHandler struct{}

func NewCourserHandler() *CourserHandler {
	return &CourserHandler{}
}

// extract base domain name from URL
func extractDomain(src string) (string, error) {
	u, err := url.Parse(src)
	if err != nil {
		fmt.Println("Invalid URL:", err)
		return "", err
	}
	domain := u.Hostname()
	fmt.Printf("domain: %s\n", domain)

	return domain, nil
}

var urls = make(map[string]bool)

// run crawler
func runCourser(src string) {
	domain, err := extractDomain(src)
	if err != nil {
		return
	}

	c := colly.NewCollector(
		colly.AllowedDomains(domain),
		colly.Async(true),
	)

	// callback for hrefs (links)
	c.OnHTML("a[href]", func(e *colly.HTMLElement) {
		link := e.Attr("href")

		// TODO: deal with "other" misc. links
		// FIXME: ignore URLs with "?" or ";" in them
		if strings.Contains(e.Request.AbsoluteURL(link), domain) {
			urls[e.Request.AbsoluteURL(link)] = true
		}

		// visit link
		c.Visit(e.Request.AbsoluteURL(link))
	})

	// print on each request
	c.OnRequest(func(r *colly.Request) {
		fmt.Println(">", r.URL.String())
	})

	// run crawler
	c.Visit(src)

	c.Wait()
}

type RequestBody struct {
	URL string `json:"url"`
}

func (h *CourserHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	var body RequestBody

	err := json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	start := time.Now()
	runCourser(body.URL)
	elapsed := time.Since(start)

	fmt.Printf("found %d links in %s.\n\n", len(urls), elapsed)

	// unique url keys (from urls set)
	keys := []string{}
	for k := range urls {
		if strings.Contains(k, body.URL) {
			keys = append(keys, k)
		}
	}

	// convert to json response
	jsonData, err := json.Marshal(keys)
	if err != nil {
		fmt.Println(err)
		return
	}

	// err = os.WriteFile("./urls.json", jsonData, 0644)
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")

	_, err = w.Write(jsonData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
