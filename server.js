const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var request = require('request');
const fetch = require('node-fetch');
const https = require('https');
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
/* app.get('/items', function(req, res) {
    var filter = req.query.filter;
    res.send('Get filter ' + filter);
}); */
app.get('/express_backend', (req, res) => {
    const URL = 'https://data.fixer.io/api/latest?access_key=3bd1f93ee85d96632007b1d6ccbe4f79&base=USD&symbols=EUR';
   /*  fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log('data',{data})
       res.send({ data });
    })
    .catch(err => {
       res.redirect('/error');
    }); */
    https.get(URL, (resp) => {
        let data = '';
        
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });
        
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.stringify(data));
            return res.send(data);
        });
        
        }).on("error", (err) => {
           
        console.log("Error: " + err.message);
        });
  //res.send(URL);
});