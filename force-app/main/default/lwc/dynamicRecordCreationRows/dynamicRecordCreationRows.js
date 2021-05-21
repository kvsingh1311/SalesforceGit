import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class DynamicRecordCreationRows extends NavigationMixin(LightningElement) {

    keyIndex = 0;
    @track itemList = [
       {id:0}
    ];//6
    

    addRow() {
       ++this.keyIndex;//4
        var newItem = [
            { id: this.keyIndex }
        ];
       this.itemList = this.itemList.concat(newItem);//5*/ 
    }

    removeRow(event) {
       
        if(this.itemList.length >1){

            this.itemList = this.itemList.filter(function(result){
                alert('---Access Key---'+parseInt(event.target.accessKey)+'-----ArrayId---------'+parseInt(result.id));
                return parseInt(event.target.accessKey) !== parseInt(result.id);
            });
        }
       
    }

    handleSubmit() {
     var isVal = true;
     this.template.this.template.querySelectorAll('lightning-input-field').forEach(result =>{
         alert(result.reportValidity());
     });
    }

}