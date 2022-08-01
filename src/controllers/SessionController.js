const House = require("../models/House");
const User = require("../models/User");
const Yup = require('yup');

class SessionController{

    async store(req,res){
        const schema = Yup.object().shape({
            email: Yup.email().string().require(),
        })
        const { email } = req.body;
        let user = await User.findOne({ email })

        if(! user){
            let user = await User.create({ email });
        }
        return res.json( user );
    };

}

module.exports = new SessionController(); 