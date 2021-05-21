import { LightningElement,track,wire} from 'lwc';
import getAccounts from '@salesforce/apex/lwcApexController.searchAccountNameMethod';
const DELAY = 100;
 
export default class customSearch extends LightningElement {
    
    accountName = '';

  @track accountList= [];
  @wire (getAccounts ,{
        accStrName:'$accountName'
     })
  retrieveAccounts({error, data}){
     // alert('---Testing---');
      if(data){
          
          this.accountList=data;          
      }
      else if(error){
 
      }
      
  }
 
 
  searchAccountAction(event){
   // alert('---Serch---');
      this.accountName = event.target.value;
    
     
  }
}