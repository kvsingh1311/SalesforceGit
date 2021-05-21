import { LightningElement, track, wire } from 'lwc';
import picklistValueSets from '@salesforce/apex/fetchPickList.picklistValueSets';

export default class FetchPiclist extends LightningElement {
    @track pickistValue;
    @track allpickVal = [];
    @wire(picklistValueSets, {picklistApi: 'StageName'})
    pickVal({ error, data }) {
       
        if (data) {
            this.allpickVal = data;
            alert(JSON.stringify(data[0]));
        } else {
           // alert(JSON.stringify(error));

        }
    }
}