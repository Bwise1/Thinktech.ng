package handler

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type Payload struct{
	Email string
	Name string
	Message string

}
func Handler(w http.ResponseWriter, r *http.Request) {
	log.Println(r.URL.Path)
	if r.URL.Path != "/mail" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}
	switch r.Method{
	case "POST":
		body, err := ioutil.ReadAll(r.Body)
    if err != nil {
        panic(err)
    }
    log.Println(string(body))
	default:
		fmt.Fprintf(w, "%v Method not allowed",r.Method)
	}

}
