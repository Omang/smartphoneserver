const Phone = require('../models/PhoneModel');


const addBusiness = async(req, res)=>{
	const {business_owner, business_name, business_logo,
           phonenumber, email, location, fax,
           business_services} = req.body;

           console.log(req.body);

    try{

            const addednew = await Phone.create({business_owner:business_owner, 
            business_name: business_name, business_logo: business_logo,
            phonenumber: phonenumber,email: email, 
            location: location, fax: fax,
            business_services: business_services});

            res.json(addednew);


    }catch(e){
    	throw new Error(e);
    }
    
}

const updateBusiness = async(req, res)=>{

	const {business_id, business_name, business_logo,
           phonenumber, email, location, fax,
           business_services} = req.body;

    try{

    	const addednew = await Phone.findByIdAndUpdate(business_id, {business_name: business_name,
    	   business_logo: business_logo,
           phonenumber: phonenumber, email: email, 
           location: location, fax: fax,
           business_services: business_services}, {new:true});

    	res.json(addednew);

    }catch(e){
    	throw new Error(e);
    }

}

const userbusinesses = async(req, res)=>{
    const {id}= req.params;
    try{

        const allbusi =await Phone.find({"business_owner": {"$in" : [id]}});

        res.json(allbusi);

    }catch(e){
        throw new Error(e);
    }
}

const allBusiness = async(req, res)=>{

	try{

      const allbus =await Phone.find();

      res.json(allbus);

	}catch(e){

		throw new Error(e);

	}
}

const getBusiness = async(req, res)=>{

    const {id}= req.params;

    try{

    	const buss = await Phone.findById(id);

    	res.json(buss);

    }catch(e){

    	throw new Error(e);

    }

}

const deleteBusiness = async(req, res)=>{

	const {id} = req.params;

	try{

		const buss = await Phone.findByIdAndDelete(id);

		res.json(buss);

	}catch(e){
		throw new Error(e);
	}

}

module.exports = {addBusiness, updateBusiness, getBusiness, deleteBusiness, allBusiness, userbusinesses};