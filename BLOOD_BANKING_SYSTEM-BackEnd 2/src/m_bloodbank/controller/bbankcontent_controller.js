const dbconnection = require('../database');

exports.getBloodbankcontent= async(req,res) => {
    try {
        const bloodbankcontent = await dbconnection.query('SELECT * FROM bloodbankcontent');
        res.status(200).send({
            success: true,
            data: bloodbankcontent [0],
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
exports.addBloodbankcontent = async(req,res) => {
    try {
        let {bloodgroupid, bloodbankid, date, isavailable} =req.body;
        const bloodbankcontent = await dbconnection.query(
            "INSERT INTO bloodbankcontent(bloodgroupid, bloodbankid, date, isavailable) VALUES(?, ?, ?, ?)", [bloodgroupid, bloodbankid, date, isavailable]);
            res.status(201).send({
                success: true,
                data: bloodbankcontent,
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
exports.updateBloodbankcontent= async(req,res) => {
    try {
        let {name} =req.body;
        let id = req.query.id
        const bloodbankcontent= await dbconnection.query(
            "UPDATE Bloodbankcontent SET bloodgroupid = ?, bloodbankid = ?, date = ?, isavaialable = ? WHERE id = ? ",
             [bloodgroupid, bloodbankid, date, isavailable]
            );
            res.status(201).send({
                success: true,
                data: updateBloodbankcontent[0],
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
exports.deleteBloodbankcontent= async(req, res) => {
    try {
        let id = req.params.id;
        const Bloodbankcontent = await dbconnection.query(
            "DELETE FROM bloodbank WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: bloodbankcontent,
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
    
