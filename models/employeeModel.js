var mongoose=require('mongoose')

var employeeSchema=new mongoose.Schema(
    {
        empcode:{type:String,required:true},
        empname:{type:String,required:true},
        empsalary:{type:String,required:true},
        empdesignation:{type:String,required:true},
        cmpname:{type:String,required:true},



        
    }
);

var employeeModel=mongoose.model('employees',employeeSchema);
module.exports={employeeModel}