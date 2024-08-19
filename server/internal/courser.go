package internal

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"strings"
	"sync"
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
var lock = sync.RWMutex{}

// run crawler
func runCourser(src string) error {
	domain, err := extractDomain(src)
	if err != nil {
		fmt.Println("ERR:", err)
		return err
	}

	c := colly.NewCollector(
		colly.AllowedDomains(domain),
		colly.Async(true),
		colly.MaxDepth(2),
	)

	// callback for hrefs (links)
	c.OnHTML("a[href]", func(e *colly.HTMLElement) {
		link := e.Attr("href")

		// TODO: deal with "other" misc. links
		if strings.Contains(e.Request.AbsoluteURL(link), domain) && !strings.Contains(link, "?") && !strings.Contains(link, ";") {
			lock.Lock()
			defer lock.Unlock()

			// standardize non-file URL paths to end with "/"
			u, err := url.Parse(e.Request.AbsoluteURL(link))
			if err != nil {
				fmt.Println("ERR:", err)
				return
			}
			if !strings.HasSuffix(u.Path, "/") && !strings.Contains(u.Path, ".") {
				u.Path += "/"
			}
			urls[u.String()] = true
		}

		// visit link
		err := c.Visit(e.Request.AbsoluteURL(link))
		if err != nil {
			fmt.Println("ERR:", err)
			return
		}
	})

	c.OnRequest(func(r *colly.Request) {
		// fmt.Println(">", r.URL.String())
	})

	// deal with failed requests
	c.OnError(func(r *colly.Response, err error) {
		fmt.Printf("\t ! %s failed with status code: %d\n", r.Request.URL, r.StatusCode)

		if r.StatusCode == 404 {
			// remove from list if non-existent

			lock.Lock()
			defer lock.Unlock()
			delete(urls, r.Request.URL.String())
		}

		if r.StatusCode == 403 {
			// remove from list if forbidden

			lock.Lock()
			defer lock.Unlock()
			delete(urls, r.Request.URL.String())
		}
	})

	// run crawler
	err = c.Visit(src)
	if err != nil {
		fmt.Println("ERR:", err)
		return err
	}

	c.Wait()

	return nil
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
	err = runCourser(body.URL)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
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
		fmt.Println("ERR:", err)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")

	_, err = w.Write(jsonData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
