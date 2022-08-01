const  {Schema, model}  =require('mongoose');

const UserSchema = new Schema({
    email: String, 
});

module.exports = new model('User ',UserSchema);