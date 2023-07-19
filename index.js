
const express = require('express');
const Body_parser = require('body-parser');

const cors = require('cors');

const app = express();

app.use(Body_parser.json());

const dbConnect = require('./config/dbConnect');
const PORT = 3000;

const router = require('./routes/PhoneRoute');

app.use(Body_parser.urlencoded({extended: false}));
app.use(cors({
 
 credentials: true,
 origin: "https://animaldbclient.onrender.com"

}));

app.use('/api', router);




app.listen(PORT, ()=>{
	dbConnect();
	console.log(`Server running at: ${PORT}`);

})

