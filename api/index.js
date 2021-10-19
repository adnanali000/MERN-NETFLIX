const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');


//env configuratiom
dotenv.config();

//connent to mongoose
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('Database connected successfully'))
.catch(err=>console.log(err))


//accept express json
app.use(express.json());

//listen register route
app.use('/api/auth',authRoute);


//run app on 8800
app.listen(8800,()=>{
    console.log('backend server running');
})