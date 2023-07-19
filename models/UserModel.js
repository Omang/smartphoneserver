const mongoose = require('mongoose');

const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	email: {type: String, required: true, unique: true, trim: true},
	password: String,
	phonenumber: String,
	gender: String,
	emailink: String

}, {timestamps: true});

UserSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
UserSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}


module.exports = mongoose.model('User', UserSchema);