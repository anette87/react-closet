// const path = require('path');
// const express = require('express');
// const app = express();
// const publicPath = path.join(__dirname, '..', 'public');
// const port = process.env.PORT || 3000;

// app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//     console.log(publicPath);
//     console.log(path.join(publicPath, '/index.html'));
//    res.sendFile(path.join(publicPath, '/index.html'));
// });

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);

app.listen(port, () => {
   console.log('Server is up!');
});