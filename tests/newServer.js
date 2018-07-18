const express = require('express');
const app = express();

getDate = () =>{
    var date = new Date();
    // let year = 
      return `[${date.getFullYear()}-0${date.getMonth()+1}-0${date.getDay()}] : ${date.getHours()}`;
  };
app.get('/', (req, res) => {
  res.status(200).send('Hello worlds');
  console.log('Listening to 8080 PORT', getDate());
});

app.listen(8080, ()=>{
  console.log(`Listening to 8080 PORT ${getDate()}`);
});