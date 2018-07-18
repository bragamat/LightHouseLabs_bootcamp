const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
// const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
  let drinks = [
    {name: 'Bloody Mary' , drunkness: 3,},
    {name: 'Martini' , drunkness: 5,},
    {name: 'Scotch' , drunkness: 10,}
  ];
let tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";


  res.render('pages/index', {
    drinks: drinks,
    tagline: tagline
  });
});

app.get('/about', (req, res) => {
  res.render('pages/about');
})

app.listen(PORT);
console.log(`${PORT} is the magic port`);