const bodyparser = require('body-parser');
const express = require('express')
const bbankcont_route = require('./src/m_bloodbank/routes/bbankcont_route')
const bloodbank_route = require('./src/m_bloodbank/routes/bloodbank_route')
const bloodgroup_route = require('./src/m_bloodbank/routes/bloodgroup_route')
const bloodreq_route = require('./src/m_bloodbank/routes/bloodreq_route')
const app = express()
const port = 8000
app.use(bodyparser.json());

app.use('/bbankcont', bbankcont_route);
app.use('/bloodbank' , bloodbank_route);
app.use('/bloodgroup' , bloodgroup_route);
app.use('/bloodreq' , bloodreq_route);

  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost${port}`)
  });