package internal

import (
	"encoding/json"
	"net/http"
)

type CourserHandler struct{}

func NewCourserHandler() *CourserHandler {
	return &CourserHandler{}
}

type Body struct {
	URL string `json:"url"`
}

func (h *CourserHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	var body Body

	err := json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	w.WriteHeader(http.StatusOK)

	_, err = w.Write([]byte("request body (courser):\n" + body.URL))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
