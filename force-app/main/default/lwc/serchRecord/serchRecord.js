import { LightningElement, track, wire } from 'lwc';
import fetchAccounts from '@salesforce/apex/recordSearch.fetchAccounts';

export default class SerchRecord extends LightningElement {
    @track accountList = [];
    @track accountName = '';
    @wire(fetchAccounts, { keyNameString: '$accountName' })
    callMethod({ error, data }) {
        if (data) {
          //  alert('----'+JSON.stringify(data));
            this.accountList = data;
        } else if (error) {

        }
    }
    handlerChnage(event){
        console.log(event.target.value);
       this.accountName = event.target.value; 
    }
}