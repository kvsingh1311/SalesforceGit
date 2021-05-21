import { LightningElement, track } from 'lwc';

export default class LwcParent extends LightningElement {
        @track firstNameVal;
        @track lastNameVal;
        @track fullNameVal;

    handleChange(event){
        if(event.target.name=='firstName'){
            this.firstNameVal = event.target.value;
            //window.console.log('firstNameVal# ' + this.firstNameVal );
        }
        if(event.target.name=='lastName'){
            this.lastNameVal = event.target.value;
            //window.console.log('lastNameVal# ' + this.lastNameVal );
        }
        this.fullNameVal = this.firstNameVal + ' ' + this.lastNameVal;

    }

        addValueAction(event){
           // this.fullNameVal = this.firstNameVal + ' ' + this.lastNameVal;
           // window.console.log('fullNameVal# ' + this.fullNameVal );
        }

 }