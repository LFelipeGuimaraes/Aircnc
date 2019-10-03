const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-wrc2z.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req.query: acessa query params
// req.params: acessa route params
// req.body: acessa corpo da requisição

app.use(express.json())
app.use(routes);

app.listen(3333);