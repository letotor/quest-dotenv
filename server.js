const express=require('express');
const dotenv=require('dotenv').config();
console.log(process.env.MY_NAME)

const app = express();
const port = 3000;
app.listen(port, err => err ? console.error('error server') : console.log(`Server running on port ${port}`))

app.get('/', (req, res) => res.status(200).send(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`))
