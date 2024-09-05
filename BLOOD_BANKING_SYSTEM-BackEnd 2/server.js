const bodyparser = require('body-parser');
const express = require('express')
const bbankcont_route = require('./src/m_bloodbank/routes/bbankcont_route')
const bloodbank_route = require('./src/m_bloodbank/routes/bloodbank_route')
const bloodgroup_route = require('./src/m_bloodbank/routes/bloodgroup_route')
const bloodreq_route = require('./src/m_bloodbank/routes/bloodreq_route')
const auth_route = require('./src/m_account/routes/auth_route')
const hospital_route = require('./src/m_hospital/routes/hospital_route')
const hospitalpatient_route = require('./src/m_hospital/routes/hospitalpatient_route')
const app = express()
const port = 8000
app.use(bodyparser.json());

app.use('/bloodbankcontent', bbankcont_route);
app.use('/bloodbank' , bloodbank_route);
app.use('/bloodgroup' , bloodgroup_route);
app.use('/bloodrequest' , bloodreq_route);
app.use('/account', auth_route)
app.use('/hospital', hospital_route);
app.use('/hospitalpatient', hospitalpatient_route);


  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost${port}`)
  });
 