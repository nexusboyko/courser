package internal

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"

	"github.com/gocolly/colly"
	"github.com/jdkato/prose/v2"

	"github.com/joho/godotenv"
)

type ReaderHandler struct{}

func NewReaderHandler() *ReaderHandler {
	return &ReaderHandler{}
}

// reads text content from page
func read(url string) string {
	c := colly.NewCollector()
	var text []string

	c.OnHTML("a, p, h1, h2, h3, h4, span", func(e *colly.HTMLElement) {
		text = append(text, e.Text)
	})

	c.OnError(func(r *colly.Response, err error) {
		fmt.Printf("Request URL %s failed with response: %q\n", r.Request.URL, r.Body)
	})

	err := c.Visit(url)
	if err != nil {
		fmt.Println(err)
	}

	data := strings.Join(text, " ")

	return data
}

// summarizes text content
func summarize(data string) []interface{} {

	// token extraction (key words)
	doc, err := prose.NewDocument(data)
	if err != nil {
		fmt.Println(err)
	}

	var tokens []string
	for _, tok := range doc.Tokens() {
		if tok.Tag == "NN" || tok.Tag == "NNP" {
			tokens = append(tokens, tok.Text)
		}
	}

	hf_params := map[string]interface{}{
		"inputs": data,
		"parameters": map[string]interface{}{
			"min_length": 5,
			"max_length": 10,
			"do_sample":  false,
		},
		"options": map[string]interface{}{
			"use_cache":      true,
			"wait_for_model": true,
		},
	}

	paramsJSON, err := json.Marshal(hf_params)
	if err != nil {
		fmt.Println(err)
	}

	// req, err := http.NewRequest("POST", HF_API_URL, bytes.NewBuffer([]byte(data)))
	req, err := http.NewRequest("POST", os.Getenv("HF_API_URL"), nil)
	if err != nil {
		return nil
	}

	req.Body = io.NopCloser(bytes.NewReader(paramsJSON))

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", os.Getenv("HF_API_KEY")))

	client := &http.Client{}

	resp, err := client.Do(req)
	if err != nil {
		return nil
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil
	}

	var result []interface{}
	json.Unmarshal(body, &result)

	return result
}

func (h *ReaderHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	godotenv.Load(".env.local")
	var body RequestBody

	err := json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	data := read(body.URL)
	summary := summarize(data)

	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")

	summary_text, err := json.Marshal(summary[0])
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	_, err = w.Write([]byte(summary_text))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
