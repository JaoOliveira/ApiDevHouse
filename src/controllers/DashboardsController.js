const House =require('../models/House');

class DashboardsController{
    async show(req,res){
        const {  usre_id } = req.headers;

        const house = await House.find({user: user_id})
        return res.json({ok:true})
    }
}

module.exports = new DashboardsController();