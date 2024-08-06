const dbconnection = require('../database');

exports.getallhospitals = async(req,res) => {
    try {
        const hospital = await dbconnection.query('SELECT * FROM hospital');
        res.status(200).send({
            success: true,
            data: hospital[0],
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
exports.saveHospital = async(req,res) => {
    try {
        let {name, address} =req.body;
        const hospital = await dbconnection.query(
            "INSERT INTO hospital(name,address) VALUES(?, ?)", [name, address]);
            res.status(201).send({
                success: true,
                data: hospital,
                message: 'successfully saved'
            })
    } 
    catch(error) {
res.status(500).send({
    success: false,
    data: [],
    message: error,stack
});
    }
}
exports.updateHospital = async(req,res) => {
    try {
        let {name, sex} =req.body;
        let id = req.query.id
        const hospital = await dbconnection.query(
            "UPDATE hospital SET name = ?,address = ? WHERE id = ? ",
             [name, address, id]
            );
            res.status(201).send({
                success: true,
                data: updateHospital[0],
                message: 'successfully updated'
            })
    } 
    catch(error) {
res.status(500).send({
    success: false,
    data: [],
    message: error,stack
});
    }
}
exports.deleteHospital = async(req,res) => {
    try {
        let {name, sex} =req.body;
        let id = req.query.id
        const hospital = await dbconnection.query(
            "DELETE FROM hospital  WHERE id = ? ",
             [id]
            );
            res.status(200).send({
                success: true,
                data: Hospital,
                message: 'successfully deleted'
            })
    } 
    catch(error) {
res.status(500).send({
    success: false,
    data: [],
    message: error,stack
});
    }
}