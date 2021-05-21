import { LightningElement, wire, track } from 'lwc';
import getCOntacts from '@salesforce/apex/lwcFetchAllCOntact.getCOntacts';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

export default class DleteCOntactRecords extends LightningElement {
    @track recordId;
    @track allContact = [];
    @track error;
    @wire(getCOntacts)
    getCOntactRecord({ data, error }) {
        if (data) {
            //  alert(JSON.stringify(data));
            this.allContact = data;
        }
        else if (error) {
            this.error = error;
            alert(JSON.stringify(error));
        }
    }
    handleDelete(event) {
        this.recordId = event.target.value;
        deleteRecord(this.recordId)
            .then(result => {
                const evt = new ShowToastEvent({
                    title: 'Record Deleted',
                    message: 'Record Succesfully Deleted',
                    variant: 'success',
                });
                this.dispatchEvent(evt);
                return refreshApex(this.allContact);
            })
            .catch(error=>{
alert('---'+JSON.stringify(error));
            });
           
    }
}