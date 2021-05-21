public with sharing class recordSearch {
    @AuraEnabled(cacheable = true)
    public static List<Account> fetchAccounts(String keyNameString){
        List<Account> lstAccount = new List<Account>();
        lstAccount = [SELECT Id,Name,Rating,Website,Industry,Description FROM Account WHERE Name Like : '%'+keyNameString+'%']; 
        return lstAccount;
    }
}