const bodyParser = require('body-parser')
const express = require('express')
const port = 3000


const app = express();

app.use bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost${port}`)
});
