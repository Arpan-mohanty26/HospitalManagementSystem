const express = require("express");
const{createHospital,getHospitalsByCity,deleteHospital,updateHospital,getHospitalDetails}= require("../controllers/HospitalController");


const router = express.Router();

router.post("/create",createHospital);
router.get("/",getHospitalsByCity);
router.delete("/delete",deleteHospital);
router.put("/update",updateHospital);
router.get("/details/:id", getHospitalDetails);

module.exports=router;   