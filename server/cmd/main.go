package main

import (
	"courser/internal"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	fmt.Printf("starting Go server...\n")

	router := chi.NewRouter()
	router.Use(middleware.Logger)

	router.Route("/api", func(r chi.Router) {
		r.Get("/", func(w http.ResponseWriter, r *http.Request) {
			w.Write([]byte("main"))
		})

		r.Get("/courser", internal.NewCourserHandler().ServeHTTP)
	})

	http.ListenAndServe(`:8080`, router)
}
