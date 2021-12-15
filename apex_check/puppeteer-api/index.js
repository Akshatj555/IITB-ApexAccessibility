const express = require('express');
var path = require('path');
const app = express();
const port = 4000;

//Import puppeteer function
var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:5500',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT"
}

app.use(cors(corsOptions));

const searchGoogle = require('./searchGoogle');

// var dir = path.join(__dirname, 'project');

// app.use(express.static(dir));
//Catches requests made to localhost:3000/search
app.get('/search', (request, response) => {

    //Holds value of the query param 'searchquery'.
    const searchQuery = request.query.searchquery;

    //Do something when the searchQuery is not null.
    if (searchQuery != null) {

        searchGoogle(searchQuery)
            .then(results => {
                //Returns a 200 Status OK with Results JSON back to the client.
                response.status(200);
                // response.sendFile(__dirname + '/example.png');
                response.send(results)
                response.end()
            });
    } else {
        response.end();
    }
});

//Catches requests made to localhost:3000/
app.get('/', (req, res) => res.send('Hello World!'));


//Initialises the express server on the port 30000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));