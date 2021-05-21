import { LightningElement, wire, track } from 'lwc';
import fetchContactRecord from '@salesforce/apex/lwcAppExampleApex.fetchContactRecord';
export default class DisplayContactOnAccountId extends LightningElement {
    @track accRecord;
    @track error;
    @track getAccId;

    @wire(fetchContactRecord) accData({ error, data }) {
        if (data) {
            try {
                this.accRecord = data;

            } catch (e) {

            }

        }
        else {
            this.error = error;
        }
    }

    changeHandler(event) {
        this.getAccId = event.target.value;
        const myCustomEventItem = new CustomEvent('myeventdemo',{detail : this.getAccId});
        this.dispatchEvent(myCustomEventItem);
    }
}