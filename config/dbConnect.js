const {default: mongoose} = require('mongoose');

const dbConnect = ()=>{
    try {
        const conn = mongoose.connect("mongodb://127.0.0.1:27017/phonebook");
       console.log('database connected successfull'); 
    } catch (err) {
      console.log('database error');
    }
}

module.exports = dbConnect;