const express = require('express');

const app = express();

app.use(express.static('./dist/hackgenesis'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/hackgenesis/'}),
);

app.listen(process.env.PORT || 8080);
