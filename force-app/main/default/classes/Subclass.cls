public class Subclass extends Superclass {
   public Subclass() {
       
    super('Madam', 'Brenda', 'Clapentrap');
       System.debug('-------------');
}
  public override void printName() {
       
        System.debug('But you can call me ' + super.getFirstName());
    }
}