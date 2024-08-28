const dbconnection = require('../database');

exports.getBloodbank= async(req,res) => {
    try {
        const bloodbank = await dbconnection.query('SELECT * FROM bloodbank');
        res.status(200).send({
            success: true,
            data: bloodbank [0],
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
exports.addBloodbank = async(req,res) => {
    try {
        let {name} =req.body;
        const bloodbank = await dbconnection.query(
            "INSERT INTO bloodbank(name) VALUES(?)", [name]);
            res.status(201).send({
                success: true,
                data: bloodbank,
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
exports.updateBloodbank= async(req,res) => {
    try {
        let {name} =req.body;
        let id = req.query.id
        const bloodbank= await dbconnection.query(
            "UPDATE Bloodbank SET name = ? WHERE id = ? ",
             [name]
            );
            res.status(201).send({
                success: true,
                data: updateBloodbank[0],
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
exports.deleteBloodbank= async(req, res) => {
    try {
        let id = req.params.id;
        const bloodbank = await dbconnection.query(
            "DELETE FROM bloodbank WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: bloodbank,
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
    
