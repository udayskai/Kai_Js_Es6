


//Property
const _DiscountType=Symbol("_DiscountType")
const _Price       = Symbol("_price")

export default class Model{

    constructor(){
       console.log("Model say hi")
    }
//for Discount type
    set DiscountType(value){
     this[_DiscountType]=value;
   }
   get DiscountType(){
    return this[_DiscountType];
   }

// for Product Price
   set Price(value){
    this[_Price]=value;
  }
  get Price(){
   return this[_Price];
  }


}