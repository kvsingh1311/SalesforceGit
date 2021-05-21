import { LightningElement } from 'lwc';

export default class LwcApplyCss extends LightningElement {
    renderedCallback(){
		this.template.querySelector("h1").style.color="blue";
        this.template.querySelector("h1").style.textAlign="center";
        this.template.querySelector("h1").style.fontSize="16px";
        this.template.querySelector(".containerOver").style.boxShadow="0px 0px 5px #0007ea";
                this.template.querySelectorAll(".listItem").forEach(item=>{
                Object.assign(item.style, {color:'green',textAlign:'center',fontSize:'15px'});
        }); 
   }    


   customStyleChange(event){ 
    this.template.querySelector("h1").style.fontSize="22px";
    this.template.querySelector("h1").innerHTML="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";    
    this.template.querySelector(".containerOver").style.boxShadow="0px 0px 5px #ff0000"; 
      this.template.querySelectorAll(".listItem").forEach(item=>{
            Object.assign(item.style, {color:'red',textAlign:'center',fontSize:'18px'});
     });
   }
 
}