const dbconnection = require('../database')

expports.getUser = async(req, res) => {
    try {
        const client = await dbconnection.query('SELECT * FROM client');
        res.status(200).send({
            success: true,
            data: user[0],
            message: 'Success'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}
    exports.saveUser = async(req, res) => {
        try {
           let {} 
        } catch (error) {
            
        }
    }
