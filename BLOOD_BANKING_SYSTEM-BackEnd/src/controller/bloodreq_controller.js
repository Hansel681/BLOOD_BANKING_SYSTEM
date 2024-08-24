const dbconnection = require('../database');

exports.getbloodrequest = async(req,res) => {
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
        let {name, bloodtype, qty} =req.body;
        const bloodrequest = await dbconnection.query(
            "INSERT INTO bloodrequest(name,blootype,qty) VALUES(?, ?)", [name, bloodtype, qty]);
            res.status(201).send({
                success: true,
                data: bloodrequest,
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
exports.updateBloodrequest= async(req,res) => {
    try {
        let {name, bloodtype,qty } =req.body;
        let id = req.query.id
        const bloodrequest= await dbconnection.query(
            "UPDATE Bloodrequest SET name = ?,bloodtype= ?,  WHERE id = ? ",
             [name, bloodtype, qty, id]
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
    message: error,stack
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
    
