const dbconnection = require('../../database');

exports.getLocation = async(req,res) => {
    try {
        const location = await dbconnection.query('SELECT * FROM location');
        res.status(200).send({
            success: true,
            data: location[0],
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
exports.addLocation = async(req,res) => {
    try {
        let {place} =req.body;
        const location = await dbconnection.query(
            "INSERT INTO location(place) VALUES(?)", [place]);
            res.status(201).send({
                success: true,
                data: location,
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
exports.updateLocation= async(req,res) => {
    try {
        let {place} =req.body;
        let id = req.query.id
        const location = await dbconnection.query(
            "UPDATE location SET place = ?,  WHERE id = ? ",
             [place, id]
            );
            res.status(201).send({
                success: true,
                data: this.updateLocation[0],
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
exports.deleteLocation= async(req, res) => {
    try {
        let id = req.params.id;
        const location = await dbconnection.query(
            "DELETE FROM location WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: location,
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
    