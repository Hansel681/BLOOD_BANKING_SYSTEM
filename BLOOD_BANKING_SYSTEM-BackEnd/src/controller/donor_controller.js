const dbconnection = require('../database');

exports.getDonor = async(req, res) => {
    try {
        const subject = await dbconnection.query('SELECT * FROM donor');
        res.status(200).send({
            success: true,
            data: donor[0],
                message: 'Success'
            
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data:[],
            message:error.stack
        });
   
    }
}

exports.saveDonor = async(req, res) => {
    try {
        let {donorid,name,dateofbirth,gender,bloodtype,medicalstatus,donationhistory,contactinformation} = req.body;
        const control_donorid = await dbconnection.query(
            'SELECT * FROM donor WHERE ID = ?', [donorid]
        );
        if(control_donorid[0].length===0 && control_donorid[0].length!=0){
            res.status(404).send({
                success: false,
                data: [],
                message: 'Donor ID not found'
            });
           }   else  if(control_donorid[0].length!=0 && control_donorid[0].legnth===0){
                const donor_controller = await dbconnection.query(
                'INSERT INTO donor(donorid, name, dateofbirth, gender, bloodtype, medicalstatus, donationhistory, contactinformation) VALUES(?, ?, ?, ?, ?, ?, ?, ?)', [donorid, name, dateofbirth, gender, bloodtype, medicalstatus, donationhistory, contactinformation])
                    res.status(201).send({
                        success: true,
                        data: donor_controller,
                        message: 'Successfully saved'
                    })
            }
    } catch (error) {
        res.status(500).send({
            success: false,
            dar
        })
    }
}