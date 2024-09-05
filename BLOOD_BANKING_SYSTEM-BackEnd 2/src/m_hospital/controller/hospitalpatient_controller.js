const dbconnection = require('../../database');

exports.getHospitalpatient = async(req,res) => {
    try {
        const hospitalpatient = await dbconnection.query('SELECT * FROM hospitalpatient');
        res.status(200).send({
            success: true,
            data: hospitalpatient[0],
            message: 'successfull'
        })
    } catch(error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack  
    })
    }
}
exports.addHospitalpatient = async(req,res) => {
    try {
        let {patientid, hospitalid, registerdate, status} =req.body;
        const hospitalpatient = await dbconnection.query(
            "INSERT INTO hospitalpatient(patientid, hospitalid, registerdate, status) VALUES(?, ?, ?, ?)", [patientid, hospitalid, registerdate, status]);
            res.status(201).send({
                success: true,
                data: hospitalpatient,
                message: 'successfully saved'
            })
    } 
    catch(error) {
res.status(500).send({
    success: false,
    data: [],
    message: error.stack
});
    }
}
exports.updateHospitalpatient = async(req,res) => {
    try {
        let {patientid, hospitalid, registerdate, status } =req.body;
        let id = req.query.id
        const hospitalpatient = await dbconnection.query(
            "UPDATE hospitalpatient SET patientid = ?, hospitalid = ?, registerdate = ?, status = ?  WHERE id = ? ",
             [patientid, hospitalid, registerdate, status, id]
            );
            const updateHospitalpatient= await dbconnection.query(
                "SELECT * FROM hospitalpatient WHERE id = ?",
                [id]
            );
            res.status(201).send({
                success: true,
                data: updateHospitalpatient[0],
                message: 'successfully updated'
            })
    } 
    catch(error) {
res.status(500).send({
    success: false,
    data: [],
    message: error.stack
});
    }
}
exports.deleteHospitalpatient= async(req, res) => {
    try {
        let id = req.params.id;
        const hospitalpatient = await dbconnection.query(
            "DELETE FROM hospitalpatient WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: hospitalpatient,
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
    
