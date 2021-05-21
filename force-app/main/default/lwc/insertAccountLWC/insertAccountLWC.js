import { LightningElement,track } from 'lwc';
import insertAccountMethod from '@salesforce/apex/lwcApexController.insertAccountMethod';
import accName from '@salesforce/schema/Account.Name';
import accPhone from '@salesforce/schema/Account.Phone';
import accType from '@salesforce/schema/Account.Type';
import accWebsite from '@salesforce/schema/Account.Website';
import accSite from '@salesforce/schema/Account.Site';

export default class InsertAccountLWC extends LightningElement {
    @track getAccountRecord={
        Name : accName,
        Phone : accPhone,
        Type : accType,
        Website : accWebsite,
        Site : accSite
    };
    changeName(event){
        this.getAccountRecord.Name = event.target.value;
    }
    changePhone(event){
        this.getAccountRecord.Phone = event.target.value;
    }
    changeType(event){
        this.getAccountRecord.Type = event.target.value;
    }
    changeWebsite(event){
        this.getAccountRecord.Website = event.target.value;
    }
    changeSite(event){
        this.getAccountRecord.Site = event.target.value;
    }
    
    SaveAccountAction(){
        alert(JSON.stringify(this.getAccountRecord));
       insertAccountMethod({accountObj : this.getAccountRecord}).then(result=>{
            alert('Suucessfully Record Inserted'+result.Id);
        }).catch(error=>{
            alert('----Record Not inserted successfully------');
        });
    }
    

}