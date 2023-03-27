package handler

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/smtp"
	"os"
)

type Payload struct {
	Email   string `json:"email"`
	Name    string `json:"name"`
	Message string `json:"message"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/api/mail" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}
	switch r.Method {
	case "POST":
		// Read request body
		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// Parse JSON payload
		var p Payload

		err = json.Unmarshal(body, &p)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		log.Println(p)
		// Send email
		err = sendEmail(p)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// Send response
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Email sent successfully!"))

	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
		w.Write([]byte(fmt.Sprintf("%v Method not allowed", r.Method)))
	}
}

func sendEmail(p Payload) error {
	username := os.Getenv("USERNAME")
	password := os.Getenv("PASSWORD")
	to := os.Getenv("EMAIL")
	smtpHost := os.Getenv("SMTPHOST")
	smtpPort := os.Getenv("SMTPPORT")
	log.Println(smtpPort)
	message := fmt.Sprintf("From: %s\r\nTo: %s\r\nSubject: New message from %s\r\n\r\n%s", p.Email, to, p.Name, p.Message)
	auth := smtp.PlainAuth("", username, password, smtpHost)
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, username, []string{to}, []byte(message))
	if err != nil {
		log.Println(err)
		return err
	}
	log.Println("Email Sent Successfully!")
	return nil
}
