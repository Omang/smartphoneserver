const User = require('../models/UserModel');


const registerUser = async(req, res)=>{
  
    const { 
        email, 
        password} = req.body;

        try {

           const checkemail = await User.findOne({email: email});

           if(!checkemail){
             superuser = await User.create({ 
                email, 
                password});
            res.json(superuser);
        }else{
            res.json({message: "Email exists"});
        }

            
        } catch (error) {

            throw new Error(error);
            
        }



};
const loginUser = async(req, res)=>{

    const {email, password} = req.body;
        console.log(req.body);

    try {
        const findone = await User.findOne({email:email});
        if(findone && await findone.isPasswordMatched(password))
    {
      res.json({
        _id: findone?._id,
        firstname: findone?.firstname,
        lastname: findone?.lastname,
        email: findone?.email,
        phonenumber: findone?.phonenumber
      });     

    }else{
        res.json({message: "invalid credentials"});
    }
    } catch (error) {
        throw new Error(error);
    }
    


};

  
   const updateUser = async(req, res)=>{

        const {id} = req.params;
        const {email} = req.body;
        
        try {
          const updateuser = await User.findByIdAndUpdate(id, {
              firstname: req?.body?.firstname,
              lastname: req?.body?.lastname,
              phonenumber: req?.body?.phonenumber,
              gender: req?.body.gender
          }, {
            new: true
          });
          res.json(updateuser);
          
        } catch (error) {
  
          throw new Error(error);
          
        }
   };

 const updatePassword = async(req, res)=>{
    const {_id} = req.params;
    const {password} = req.body;
   
    const user = await User.findById(id);
    if(password){
      user.password = password;
      const updatedpassword = await user.save();
      res.json(updatedpassword);
    }else{
      res.json(user);
    }
};

 module.exports = {registerUser, loginUser, updateUser, updatePassword};