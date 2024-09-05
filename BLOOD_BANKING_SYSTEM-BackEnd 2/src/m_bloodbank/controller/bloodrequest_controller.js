const dbconnection = require('../../database');

exports.getBloodrequest = async(req,res) => {
    try {
        const bloodrequest = await dbconnection.query('SELECT * FROM bloodrequest');
        res.status(200).send({
            success: true,
            data: bloodrequest [0],
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
exports.addBloodrequest = async(req,res) => {
    try {
        let {patientid, bloodbankid, requestdate, status} =req.body;
        const bloodrequest = await dbconnection.query(
            "INSERT INTO Bloodrequest(patientid, bloodbankid, requestdate, status) VALUES(?, ?, ?, ?)", [patientid, bloodbankid, requestdate, status]);
            res.status(201).send({
                success: true,
                data: bloodrequest,
                message: 'successfully added'
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
exports.updateBloodrequest= async(req,res) => {
    try {
        let {patientid, bloodbankid, requestdate, status } =req.body;
        let id = req.query.id
        const bloodrequest= await dbconnection.query(
            "UPDATE bloodrequest SET patientid = ?, bloodbankid= ?, requestdate = ?, status = ? WHERE id = ?",
             [patientid, bloodbankid, requestdate, status]
            );
            const updateBloodrequest = await dbconnection.query(
                "SELECT * FROM bloodrequest WHERE id = ?"
                [id]
            );
            res.status(201).send({
                success: true,
                data: updateBloodrequest[0],
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
exports.deleteBloodrequest= async(req, res) => {
    try {
        let id = req.params.id;
        const bloodrequest = await dbconnection.query(
            "DELETE FROM bloodrequest WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: bloodrequest,
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
    
