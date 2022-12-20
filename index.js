const express = require('express');
const app = express();
const http = require('http');

const PORT = 3000;

const server = http.createServer(app);

const callback = () => {
    console.log('request!');
}

app.get('/', callback); // METHOD + URL = route / endpoint / ручка


server.listen(PORT, ()=> {
    console.log(`App is started on port ${PORT}`)
});