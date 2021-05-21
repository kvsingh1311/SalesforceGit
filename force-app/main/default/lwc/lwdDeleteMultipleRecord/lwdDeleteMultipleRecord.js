import { LightningElement, wire,api, track } from 'lwc';
import fetchContactRecord from '@salesforce/apex/lwcAppExampleApex.fetchContactRecord';
import deleteMultipleContactRecord from '@salesforce/apex/lwcAppExampleApex.deleteMultipleContactRecord';
import { refreshApex } from '@salesforce/apex';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
 
 
export default class LwdDeleteMultipleRecord extends LightningElement {
    @api  columns =[
        { label: 'First Name', fieldName: 'FirstName', type:'text'},
        { label: 'Last Name', fieldName: 'LastName',type:'text' },
        { label: 'Email', fieldName: 'Email', type:'Email'}       
    ];
 
        
    @wire (fetchContactRecord) wireContact;
 
    @api selectedContactIdList=[];// I want to store all selected record Id
    @track errorMsg;
    getSelectedIdAction(event){
      let rowRecordsData =  event.detail.selectedRows;
      this.selectedContactIdList = [];
        for(let i=0 ; i < rowRecordsData.length ; i++)
        {
            this.selectedContactIdList.push(rowRecordsData[i].Id);
        }
    }

    deleteContactRowAction(){
        deleteMultipleContactRecord({conObj : this.selectedContactIdList}).then(result =>{
const toastEvent = new ShowToastEvent({
    title : 'Success!',
    message : 'Record Succesfully Deleted',
    variant : 'success'
});
this.dispatchEvent(toastEvent);
   return refreshApex(this.wireContact);
   
        }).catch(error =>{
            this.errorMsg = error;
        });
    }
 
 
 
}