const express = require('express');
const app = express();
var router = express.Router();
var path = require('path');
var request = require('request');
var parseString = require('xml2js').parseString;
var compression = require('compression')
const port = process.env.PORT || 5000;


app.use(compression())

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.redirect('/')
})

const KEY = 'MSiPqCksVPRFRD2c6m9Q'

app.get('/new', function(req, res){
  const bookID = Math.floor(Math.random() * (95000 - 1 + 1)) + 1
  console.log(bookID)

  request({
      headers: { 'format': 'xml','key': KEY },
      uri: `https://www.goodreads.com/book/show/${bookID}?format=xml&key=${KEY}`,
      method: 'GET'
  },
  function (error, response, body) {
      if (!error && response.statusCode === 200) {
        parseString(body, function (err, result) {
            console.dir((err === null) ? "no parsing error" : err);
            res.send(result.GoodreadsResponse.book[0]);
        })
       } else {
        console.log('req went wrong  ' + error)
        res.redirect('/new')
      }
  }
  );
});


app.listen(port, () =>console.log(`Listening on port ${port}`))
