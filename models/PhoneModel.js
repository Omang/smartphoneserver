const mongoose = require('mongoose');


const PhoneSchema = new mongoose.Schema({
	business_owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
	business_name:{type: String},
	business_logo:String,
    phonenumber:String,
	location: String,
	email: String,
	fax: String,
	business_services:[String]
}, {timestamps:true});

module.exports = mongoose.model('Phone', PhoneSchema);