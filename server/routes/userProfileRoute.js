const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const userProfile = mongoose.model('userProfile');

router.post('/userProfile',async (req,res)=>{
   
   try{

    const profile = new userProfile({
             
       OrganizationDetail:{
            
            fullName:req.body.fullName,
            organization_id:req.body.organization_id,
            department:req.body.department,
            faculty:req.body.faculty,
            contact_number:req.body.contact_number

        },

        VehicleDetail:{
            
            model_no:req.body.model_no,
            number_plate:req.body.number_plate,
            color:req.body.color,
            capacity:req.body.capacity

        },
        user_id:req.body.user_id
    })
  
      await  profile.save();
      res.send({profile})
      console.log("Successfully saved");

    }catch(err){
      return res.status(422).send(err.message)
    }
    
    
})

module.exports = router