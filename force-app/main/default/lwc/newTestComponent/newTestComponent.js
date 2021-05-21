import { LightningElement } from 'lwc';

export default class NewTestComponent extends LightningElement {
    handleClick(){
      var t=  this.template.querySelectorAll('lightning-input');
      this.template.querySelector('lightning-input').value = "Hello World!";
      
    }
}