const express = require("express");
const{createHospital,getHospitalsByCity,deleteHospital,updateHospital}= require("../controllers/HospitalController");


const router = express.Router();

router.post("/create",createHospital);
router.get("/",getHospitalsByCity);
router.delete("/delete",deleteHospital);
router.put("/update",updateHospital);

module.exports=router;   