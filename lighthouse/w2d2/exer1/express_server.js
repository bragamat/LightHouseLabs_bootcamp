const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

let urlDatabase = {
  "b2xVn2": "http://lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) =>{
  res.end('Hello!');
});

app.get('/urls.json', (req, res) =>{
  res.json(urlDatabase);
})

app.get('/helloworld', (req, res) =>{
  res.end("<html><body>Hello<b>World</b></body></html>");
});

app.listen(PORT, () =>{
  console.log(`Example app listening on port: ${PORT}`);
});

