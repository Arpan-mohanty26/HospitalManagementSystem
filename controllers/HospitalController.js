const Hospital = require("../models/hospital");

exports.createHospital= async(req,res)=>{
    try{
        const hospital= new Hospital(req.body);
        await hospital.save();
        res.status(201).json({
            success:true,
            message:"Hospital Created",
            hospital

        })
    }
        catch(error){
    req.status(500).json({
        success:false,
        message:"Unable to create Hospital",
        error: error.message
    })
}
};

exports.getHospitalsByCity = async(req,res)=>{
    try{
        const{city} = req.query;
        if(!city) return res.status(400).json({
            success:false,
            message:"City Requires"
        })

        const hospitals= await Hospital.find({city});
        res.status(200).json({
            success:true,
            hospitals
        })
    }

    catch(error){
        res.status(500).json({
            success:false,
            message:"Error finding hospitals",
            error:error.message
        })
    }
};





exports.updateHospital = async (req,res)=>{
    try{
        const{id}=req.query;
        const updatedHospital = await Hospital.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({ success: true, message: "Hospital updated successfully", hospital: updatedHospital });

    }
    catch(error){
        res.status(500).json({ success: false, message: "Error updating hospital", error: error.message });
    }
};


exports.deleteHospital=  async(req,res)=>{
    try{
        const { id } = req.query;
        await Hospital.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Hospital deleted successfully" });

    }
    catch(error){
        res.status(500).json({ success: false, message: "Error deleting hospital", error: error.message });
    }
    };
