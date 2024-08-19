const dbconnection = require('../database');

exports.getDonor = async(req, res) => {
    try {
        const donor = await dbconnection.query('SELECT * FROM donor');
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
        const donor = await dbconnection.query(        
                     'INSERT INTO donor(donorid, name, dateofbirth, gender, bloodtype, medicalstatus, donationhistory, contactinformation) VALUES(?, ?, ?, ?, ?, ?, ?, ?)', [donorid, name, dateofbirth, gender, bloodtype, medicalstatus, donationhistory, contactinformation]);
                    res.status(201).send({
                        success: true,
                        data: donor,
                        message: 'Successfully saved'
                    });
            }
    catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        })
    }
}

xports.updateDonor = async(req, res) => {
    try {
        let {donorid,
            name,
            dateofbirth,
            gender,
            bloodtype,
            medicalstatus,
            donationhistory,
            contactinformation} = req.body;
        let id = req.query.id;
        const donor = await dbconnection.query(
            "UPDATE donor SET name = ?, dateofbirth = ?, gender = ?, bloodtype = ?, medicalstatus = ?, donationhistory = ?, contactinformation = ? WHERE id= ?",
             [name, dateofbirth, gender, bloodtype, medicalstatus, donationhistory, contactinformation]
            );
        const updateDonor = await dbconnection.query(
            "SELECT * FROM donor WHERE donorid = ?",
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateDonor[0],
            message: 'Successfully Updated'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteDonor = async(req, res) => {
    try {
        let id = req.params.id;
        const donor = await dbconnection.query(
            "DELETE FROM donor WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: donor,
            message: 'Successfully Deleted '+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}