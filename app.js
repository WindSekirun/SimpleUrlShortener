var express = require('express');
var path = require('path');
var app = express();
var base58 = require('./base58.js');
var bodyParser = require('body-parser');

// Basic Settings
var baseUrl = 'http://localhost:' + port + '/';
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Serve up homepage of UrlShortener
 * Edit Entry: URL, Text
 * Send to: /api/makeShort
 */
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

/**
 * Create and return a short url uses long url (or text if available)
 * Process:
 *      1. Create url uses Text
 *      2. if text is not available, next to 4
 *      3. if text is available, save url into mongodb, process ending
 *      4. create short url by shortening algorithm
 *      5. save url into mongodb, process ending
 */
app.post('/api/makeShort', function(req, res) {
     var longUrl = req.body.url;
     var shortUrl = '';
     
     shortUrl = baseUrl + base58.encode(doc._id);
     res.send({'shortUrl': shortUrl});
})

/**
 * Redirect to original Url
 */
app.get('/:encoded_id', function(req, res) {
   
})

var server = app.listen(port, function() {
    console.log('Listening on port ' + port);
})