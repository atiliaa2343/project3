const mongoose = require('mongoose'); 

const staffSchema = new mongoose.Schema({ 
    name: String, 
    role:String, 
    hireDate: Date, 

});

module.exports = mongoose.model('Staff', staffSchema);