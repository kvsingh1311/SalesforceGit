public with sharing class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
       return [SELECT Id,FirstName,LastName,Email,Phone,Account.Name,OwnerId,Owner.Name, Owner.Email,AccountId,Name,Title FROM Contact];
    }
}