const express = require('express');
const app = express();
const tf = require('@tensorflow/tfjs-node');
var fs = require('fs');
const port = 3000;

var dic_path = "C:\\Users\\dsp-lap\\hoyoung\\imageRecognizer\\code\\page\\"

app.get('/', function (req, res) {
    res.sendFile(dic_path + 'index.html');
})

app.get('/othello', function (req, res) {
    res.sendFile(dic_path + 'othello.html');
})

app.get('/pyramid', function (req, res) {
    res.sendFile(dic_path + 'pyramid.html');
})

app.get('/same_picture', function (req, res) {
    res.sendFile(dic_path + 'same_picture.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/images/Othello_board', (req, res)=> {
    fs.readFile('./images/Othello_board.jpg', function(error, data) {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.end(data);
    });
});
app.get('/images/pyramid', (req, res)=> {
    fs.readFile('./images/pyramid.jpg', function(error, data) {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.end(data);
    });
});
app.get('/images/same_picture', (req, res)=> {
    fs.readFile('./images/same_picture.jpg', function(error, data) {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.end(data);
    });
});


async function loadModel() {
    const model = await tf.loadLayersModel('./tfjs_model');
    await model.save('file://./tfjs_model');
}

