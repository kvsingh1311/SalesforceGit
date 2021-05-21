public with sharing class lwcFetchAllCOntact {
    public lwcFetchAllCOntact() {

    }
    @AuraEnabled(cacheable=true)
      public static List<Contact> getCOntacts(){
          List<Contact> lstContact = new List<Contact>();
          lstContact = [SELECT Id,FirstName,LastName,Email,Description FROM Contact];
          return lstContact;
    }
}