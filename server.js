const express = require('express');
const app = express();
var path = require('path');
var request = require('request');
var parseString = require('xml2js').parseString;
var compression = require('compression')
const port = process.env.PORT || 5000;


app.use(compression())

app.use(express.static(path.resolve(__dirname, 'client/build')));

// Naked APi is not a good practice, so usually you should add your api key to FILE_NAME.env file and import it to here as process.env.FILE_NAME
const KEY = 'MSiPqCksVPRFRD2c6m9Q'

app.get('/rbr', function(req, res){
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
            res.json(result.GoodreadsResponse.book[0]);
        })
       } else {
        console.log('req went wrong  ' + error)
        res.redirect('/')
      }
  }
  );
});

// FallBack when the user manpilates the address to redirect again to homepage
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/client/build/index.html')
});

app.listen(port, () =>console.log(`Listening on port ${port}`))
