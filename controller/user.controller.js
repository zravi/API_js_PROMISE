import '../model/connection.js';

//to link schema model
import UserSchemaModel from '../model/user.model.js';

export var save=(userDetails)=>{
  return new Promise((resolve,reject)=>{
    userDetails={...userDetails,"_id":3,"status":0,"role":"user","info":Date()};

    var obj = new UserSchemaModel(userDetails);
     
    // save model to database
    obj.save((err,result)=>{
      var res=err ? reject(err) : resolve(result);            
      console.log(res);
    });
  });  
}