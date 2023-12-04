const express_ = require('express');
const app = express_();
const bodyparser = require("body-parser")
const helmet = require("helmet");
var cors = require('cors');

const xss  = require("xss-clean");


app.use(cors());//to follow cors policy
app.use(xss());//safety against XSS attack or Cross Site Scripting attacks
app.use(helmet());//safety against XSS attack
app.use(express_.json({ extended: false }));
app.use(express_.static('.'));
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())




app.use('/mail',require('./sendmail'));



app.get('/', (req, res) => {
    const name = process.env.NAME || 'World';
    res.send(`Hello ${name}!`);
  });

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});


