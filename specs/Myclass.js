
class Myclass 

{


    constructor()
    {
        console.log("Initiate");

    }
 addnumbers(arg1, arg2)
 {
    var result;
    
    result = arg1 + arg2 ;
    return result;

 }
 addanotherfn(arg1, arg2)
 {
     
     var result = this.addnumbers(arg1, arg2);
     return result;
 }

  
}
module.exports = Myclass;