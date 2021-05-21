public virtual class SuperClass {
    public String mySalutation;
    public String myFirstName;
    public String myLastName;
    
    public SuperClass() {
        System.debug('----Non Parameter Constructor------');
        mySalutation = 'Mr.';
        myFirstName = 'Carl';
        myLastName = 'Vonderburg';
    }
    
    public SuperClass(String salutation, String firstName, String lastName) {
         System.debug('---- Parameter Constructor------');
        mySalutation = salutation;
        myFirstName = firstName;
        myLastName = lastName;
    }
    
    public virtual void printName() {
        
        System.debug('My name is ' + mySalutation + myLastName);
    }
    
    public virtual String getFirstName() {
        return myFirstName;
    }
}