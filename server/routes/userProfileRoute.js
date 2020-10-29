const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const userProfile = mongoose.model('userProfile');

router.post('/userProfile',async (req,res)=>{
   
   try{

    const profile = new userProfile({

        // fullName = req.body.fullName,
        fullName:req.body.fullName,

        OrganizationDetail:{
            // organization_id = req.body.OrganizationDetail.organization_id,
            // department = req.body.OrganizationDetail.department,
            // faculty = req.body.OrganizationDetail.faculty,

            organization_id:req.body.OrganizationDetail.organization_id,
            department:req.body.OrganizationDetail.department,
            faculty:req.body.OrganizationDetail.faculty,
            contact_number:req.body.OrganizationDetail.contact_number

        },

        VehicleDetail:{
            // model_no = req.body.VehicleDetail.model_no,
            // number_plate = req.body.VehicleDetail.number_plate,
            // color = req.body.VehicleDetail.color

            model_no:req.body.VehicleDetail.model_no,
            number_plate:req.body.VehicleDetail.number_plate,
            color:req.body.VehicleDetail.color

        },
        user_id:req.body.user_id
    })
      //profile = new userProfile({profile})
      await  profile.save();
      res.send({profile})
      console.log("Successfully saved");

    }catch(err){
      return res.status(422).send(err.message)
    }
    
    
})

module.exports = router