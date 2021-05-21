public class fetchPickList {
    @AuraEnabled(cacheable=true)
    public static List<customWrapper> picklistValueSets(String picklistApi){
        List<customWrapper> lstWrp = new List<customWrapper>();
        for(schema.PicklistEntry eachValue : Opportunity.getSObjectType().getDescribe().fields.getMap().get(picklistApi).getDescribe().getPicklistValues()){
            customWrapper wrp = new customWrapper();
            wrp.fieldValue =eachValue.getLabel();
            wrp.fieldApi =eachValue.getValue();
            lstWrp.add(wrp);
        }
            
       return lstWrp;
    }
    //wrapper
    public class customWrapper{
        @AuraEnabled public string fieldValue{get;set;}
        @AuraEnabled public string fieldApi{get;set;}
    }
   

}