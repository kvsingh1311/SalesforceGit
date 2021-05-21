import { LightningElement, track, wire } from 'lwc';
import fetchAccounts from '@salesforce/apex/AccountListController.fetchAccounts';

export default class Example extends LightningElement {

    @track gridColumns = [{
        type: 'text',
        fieldName: 'Name',
        label: 'Name'
    },
    {
        type: 'text',
        fieldName: 'Industry',
        label: 'Industry'
    },
    {
        type: 'text',
        fieldName: 'Active__c',
        label: 'Active'
    },
    {
        type: 'text',
        fieldName: 'FirstName',
        label: 'FirstName'
    },
    {
        type: 'text',
        fieldName: 'LastName',
        label: 'LastName'
    }];
    @track gridData;
    @track activeFilter = 'All';
    @track allRows;

    @wire(fetchAccounts)
    accountTreeData({ error, data }) {

        if ( data ) {

            var tempData = JSON.parse( JSON.stringify( data ) );
            console.log('----'+tempData);
            for ( var i = 0; i < tempData.length; i++ ) {
                console.log(JSON.stringify(tempData[ i ][ 'Contacts' ]));
                var cons = tempData[ i ][ 'Contacts' ];
         
                if ( cons ) {

                    tempData[ i ]._children = cons;
                    delete tempData[ i ].Contacts;

                }

            }
            this.gridData = tempData;
            this.allRows = tempData;

        } else if ( error ) {
         
            if ( Array.isArray( error.body ) )
                console.log( 'Error is ' + error.body.map( e => e.message ).join( ', ' ) );
            else if ( typeof error.body.message === 'string' )
                console.log( 'Error is ' + error.body.message );

        }

    }

   
}