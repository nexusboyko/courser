<div align="center">
  <img src="https://github.com/nexusboyko/courser/assets/71574111/39e85446-bda3-44dd-a109-b8f327d42d6c" height="100px" width="100px" alt="courser" />
  <h3>courser - to organize your courses and find what you need</h3>
  <p>A crawler that finds all available resources links from a specificed URL, organizing them in a directory structure you can easily navigate.</p>
  <small>(Check below for instructions to run/test it locally)</small>
</div>

---

![image](https://github.com/user-attachments/assets/0b8092d0-4ed3-40bb-b7e9-d6c6a35223a1)

***Still working out issues, but I wanted to get something working out for people to actually use or contribute to. Hoping I can find the time to figure out how to properly host/accept public traffic, but for now it's a good personal tool.**

#### Run it locally!

The client is a simple Next.js application, and the server is just a Go binary (executable). <br />
<br />
Head into the `client` folder and run `npm run dev` to run the front-end client locally. <br />
In the `server` folder, run `go build cmd/main.go` + `./main` to start the back-end server (or just `air` if you have it installed).
