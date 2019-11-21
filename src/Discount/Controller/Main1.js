///<reference path ="../../../jquery-3.4.1.min.js"/>



// inheritense
const _Model = Symbol("_Model");

export default class Main{
 
  constructor( ){
    
  }

  onSubmit(data){
            let dataobj= data;
            let uday=undefined;
            uday=dataobj.discountAsperCustomer;
           console.log(uday) ;
  }
    
}


import Model from "../Model/model"
import Child from "./Child"
import Discount from "./DiscountBase";

export function Middle(){ 
       
    //makeinstance
    let Discountobjchild=null;
    Discountobjchild=new Discount()
    //model oBj  
    let Modelobj=null;
    Modelobj=new Model;
    Modelobj.Price=1000;
    Modelobj.DiscountType=10;


    // instance created 
    Discountobjchild=new Child();
    Discountobjchild.discountAsperCustomer(Modelobj.Price,Modelobj.Price);
   
    let mainobj=null;
    mainobj=new Main();
    mainobj.onSubmit(Discountobjchild);
   
}