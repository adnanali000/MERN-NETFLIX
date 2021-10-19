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
    // useCreateIndex: true
})
.then(()=>console.log('Server connected successfully'))
.catch(err=>console.log(err))


app.use('/api/auth',authRoute);

app.listen(8800,()=>{
    console.log('backend server running');
})