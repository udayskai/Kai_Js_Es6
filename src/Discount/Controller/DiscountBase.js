



export default class Discount{


   
    constuctor(){
       console.log("hi from Prent Constuctor")
    }
  
 //## virtual method Or Incomplete Method

    discountAsperCustomer(numPrice,strCustomerType){
           console.log("hi from Parent")
           throw new Error("use this in child class not directly")
    }
}