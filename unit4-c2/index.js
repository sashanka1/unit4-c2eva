const express =require ("express");
const mongoose=require("mongoose");
var app =express();
app.use(express.json());
const conectDb=()=>{
    mongoose.connect("mongodb+srv://sss:Hacker1mon@cluster0.lhntb.mongodb.net/bank?retryWrites=true&w=majority")
}


const userschema=mongoose.Schema(
   { 
       firstName:{type:String,require:true},
   middleName:{type:String},
   lastName:{type:String,require:true},
   age:{type:Number,require:true},

   email:{type:String,require:true},

   adress:{type:String,require:true},
   gender:{type:String,require:true},
   userId:{type:mongoose.Schema.Types.ObjectId,ref:"masteracc",required:true},


   typeofacc:{
       type:String
   }

},
{
    timestamps:true,
},
);


const User =mongoose.model("userdata",userschema)


const branchschema=mongoose.Schema(
    { 
        name:{type:String,require:true},
        adress:{type:String,require:true},
    
    IFSC:{type:String,require:true},
 
   
    micr:{type:Number,require:true},
 
 },
 {
     timestamps:true,
 },
 );

 const Branch =mongoose.model("branchdata",branchschema)

 const masterschema=mongoose.Schema(
     {
         balance:{type:Number,require:true},
         branchId:{type:mongoose.Schema.Types.ObjectId,ref:"branchdata",required:true},
     },

     {
        timestamps:true,
    },
 );

 const Master =mongoose.model("masteracc",masterschema)


 const savingschema=mongoose.Schema(
     {
       accountNo:{type:Number,unique:true},
        balance:{type:Number,require:true},
        intrestRate:{type:Number,require:true},
         
     },

     {
        timestamps:true,
    },
 );

 const Savingacc =mongoose.model("savingacc",savingschema);


const fixedschima=mongoose.Schema(
    {

        accountNo:{type:Number,unique:true},
        balance:{type:Number,require:true},
        intrestRate:{type:Number,require:true},
        startDate:{type:String,require:true},
        maturitydate:{type:String,require:true},

        
    },

    {
        timestamps:true,
    },
  
);


app.listen(6000,async()=>{
    try {
        await conectDb()
    } catch (error) {
        console.log(error);
    };
    console.log("listingin at port 6000")
});