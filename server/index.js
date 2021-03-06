const express  = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000
const {mogoUrl} = require('./keys')

require('./models/User');
require('./models/userProfile');

const requireToken = require('./middleware/requireToken')
const authRoutes = require('./routes/authRoutes')
const userProfile = require('./routes/userProfileRoute') 
app.use(bodyParser.json())
app.use(authRoutes)
app.use(userProfile)

mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false,
    useCreateIndex: true
})

mongoose.connection.on('connected',()=>{
    console.log("connected to Database")
})

mongoose.connection.on('error',(err)=>{
    console.log("this is error",err)
})



app.get('/',requireToken,(req,res)=>{
    res.send({email:req.user.email})
})

app.listen(PORT,()=>{
    console.log("server running "+PORT)
})