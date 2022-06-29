const express=requre('express')

const app = express();
const port = 3000;
app.listen(port, err => err ? console.error('error server') : console.log(`Server running on port ${port}`))


