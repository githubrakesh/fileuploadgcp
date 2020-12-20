
const routes = require('./routes');

const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));

// app.get('/api/', async (req, res) => {

//     const [resp] = await storage.generateV4SignedPolicy();
//     res.send(resp);
// });
app.use(routes);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
