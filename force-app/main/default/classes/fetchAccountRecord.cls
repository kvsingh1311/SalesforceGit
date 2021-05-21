public with sharing class fetchAccountRecord {
   @AuraEnabled
   public static List<Account> fetchAcc(){
     List<Account> lstAccount = new List<Account>();
     lstAccount = [SELECT id,Name,Phone,Industry FROM Account ];
     return lstAccount;
   }

   @AuraEnabled
   public static List<Contact> fetchContactRelatedToAcc(String accId){
     List<Contact> lstContact = new List<COntact>();
     lstContact = [SELECT id,FirstName,LastName,Email,Phone,AccountId FROM Contact WHERE AccountId =: accId ];
     return lstContact;
   }
}