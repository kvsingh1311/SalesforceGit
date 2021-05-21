import { LightningElement, track, wire } from 'lwc';
import fetchConRecord from '@salesforce/apex/lwcAppExampleApex.fetchCon';
export default class ParentComponentContact extends LightningElement {
    @track conRecord;
    @track accountId;
    handleEventAction(event) {
        this.accountId = event.detail;
       
    }
    @wire(fetchConRecord,{accId : this.accountId}) con({ error, data }) {
        if (data) {
            alert(JSON.stringify(data));
        }
    }
}