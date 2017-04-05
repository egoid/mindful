var express = require('express'),
    app = express();

const port = process.env.PORT || 3000

app.use(express.static('src'));

app.get('/', function (req, res, next) {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(port, function () {
    console.log('Up and running on ', port);
});