const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const userschema = mongoose.Schema({
    regNo: Number,
    name: String,
    Branch: String,
    email: String,
    phone: Number
})

autoIncrement.initialize(mongoose.connection);
userschema.plugin(autoIncrement.plugin, 'user');
const user = mongoose.model('user', userschema);
 
module.exports = user;