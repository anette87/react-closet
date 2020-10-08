const express = require('express');
const http = require('http');
const path = require('path');
let app = express();
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));

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

// app.listen(port, () => {
//    console.log('Server is up!');
// });