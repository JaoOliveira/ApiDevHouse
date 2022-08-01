const House = require("../models/House");
const reserve = require("../models/reserve");
const Reserve = require("../models/reserve");
const User = require("../models/User");

class ReserveControlle{
    async index(req,res){
        const {user_id } = req.headers;

        const reserves = await Reserve.find({ user: user_id}).populate('house');
        return res.json(reserves);
    }
    async store(req,res){
        const {user_id } = req.headers;
        const {house_id } = req.params;
        const {date } = req.body;

        const house = await House.findById(house_id);
        if(!house){
            return res.status(400).json({ error: 'Essa casa não existe.'})
        }
        if( house.status !== true){
            return res.status(400).json({ error: 'Solicitação Indisponivel.'})
        }

        const user = await User.findById(user_id);
        if( String(user_id)===String(house.user)){
            return res.status(401).json({ error: 'Solicitação Indisponivel.'})
        }

        const reserve = await Reserve.create({
            user: user_id,
            house: house_id,
            date
        })
        await reserve.populate('house').populate('user').execPopulate();

        return res.json({ok:true})
    }
    async destroy(req,res){
        const { reserve_id } = req.body;

        await Reserve.findByIdAndDelete({_id});
        return res.send();
    }
}

module.exports = new ReserveControlle()