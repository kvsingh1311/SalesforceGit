import { LightningElement, wire,track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
  
export default class AccountListLWC extends LightningElement {
    @track accounts;
    @track error;
    @track newTest;
    @wire(getAccountList)
    wiredAccounts({ error, data }) {
        if (data) {
            alert('----Sucess Part----');
            this.accounts = data;
        } else if (error) { 
            alert('----Error Part----');
            this.error = error;
        }
    }
}