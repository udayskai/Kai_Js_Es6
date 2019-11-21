import Discount from "./DiscountBase"






export default class Child extends Discount{

     

     // override complete
      discountAsperCustomer(numPrice,strCustomerType){

         let result=( numPrice*strCustomerType/100)
                
                 
                    return  result;
             
          }

         
      

}