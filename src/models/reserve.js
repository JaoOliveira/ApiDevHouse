const  {Schema, model}  =require('mongoose');
const User = require('./User');

const ReserveSchema = new Schema({
    date: String,
    user:{
       type: Schema.Types.ObjectId,
       ref:'User'
    },
    house:{
        type: Schema.Types.ObjectId,
        ref:'House'
     },
});

module.exports = new model('Reserve',ReserveSchema);