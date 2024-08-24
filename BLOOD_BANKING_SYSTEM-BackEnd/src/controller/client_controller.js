const dbconnection = require('../database');

exports.getClient= async(req, res) => {
    try {
        const client= await dbconnection.query('SELECT * FROM client');
        res.status(200).send({
            success: true,
            data: client[0],
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

exports.addClient = async(req, res) => {
    try {
        let {name,dateofbirth,gender,bloodtype,medicalstatus,contact} = req.body;
        const client= await dbconnection.query(        
                     'INSERT INTO client(name, dateofbirth, gender, bloodtype, medicalstatus, contact) VALUES(?, ?, ?, ?, ?, ?)', [name, dateofbirth, gender, bloodtype, medicalstatus, contact]);
                    res.status(201).send({
                        success: true,
                        data: client,
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

exports.updateClient = async(req, res) => {
    try {
        let {name,
            dateofbirth,
            gender,
            bloodtype,
            medicalstatus,
            contact} = req.body;
        let id = req.query.id;
        const client= await dbconnection.query(
            "UPDATE client SET name = ?, dateofbirth = ?, gender = ?, bloodtype = ?, medicalstatus = ?, contact = ? WHERE id= ?",
             [name, dateofbirth, gender, bloodtype, medicalstatus, donationhistory, contact]
            );
        const updateClient= await dbconnection.query(
            "SELECT * FROM client WHERE id = ?",
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateClient[0],
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

exports.deleteClient = async(req, res) => {
    try {
        let id = req.params.id;
        const client = await dbconnection.query(
            "DELETE FROM client WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: client,
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