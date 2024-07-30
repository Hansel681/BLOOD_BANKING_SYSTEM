const bodyparser = require('body-parser');
const express = require('express')
const hosp_route = require('./src/routes/hospital_route')
const app = express()
const port = 8000
app.use(bodyparser.json());

app.use('/hospital', hosp_route);

  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost${port}`)
  });