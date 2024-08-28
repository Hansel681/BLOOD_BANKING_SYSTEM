const dbconnection = require('../database');

exports.getBloodgroup= async(req,res) => {
    try {
        const bloodgroup = await dbconnection.query('SELECT * FROM bloodgroup');
        res.status(200).send({
            success: true,
            data: bloodgroup [0],
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
        let {name} =req.body;
        const bloodgroup = await dbconnection.query(
            "INSERT INTO bloodrequest(name) VALUES(?)", [name]);
            res.status(201).send({
                success: true,
                data: bloodgroup,
                message: 'successfully added'
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
exports.updateBloodrequest= async(req,res) => {
    try {
        let {name} =req.body;
        let id = req.query.id
        const bloodgroup= await dbconnection.query(
            "UPDATE Bloodgroup SET name = ? WHERE id = ? ",
             [name]
            );
            res.status(201).send({
                success: true,
                data: updateBloodgroup[0],
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
exports.deleteBloodrequest= async(req, res) => {
    try {
        let id = req.params.id;
        const bloodrequest = await dbconnection.query(
            "DELETE FROM bloodgroup WHERE id= ?",
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
    
