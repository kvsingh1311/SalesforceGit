import { LightningElement,track } from 'lwc';
export default class First_LWC extends LightningElement {
    EnterPhrase = 'First LWC';
    @track greeting ;
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}