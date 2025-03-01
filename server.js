require("dotenv").config();

const express= require("express");
const mongoose= require("mongoose");
const cors= require("cors");

const app=express();
app.use(express.json());
app.use(cors());

const hospitalRoutes= require("./routes/HospitalRoutes");
app.use("/api/v1/hospitals",hospitalRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected Successfully!"))
.catch((err)=>console.log("MongoDB Connection Error!",err));

app.get("/",(req,res)=>{
    res.send("Hospital Management System is Running Here!");
})

const PORT =process.env.PORT || 4000;

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));