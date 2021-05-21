import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    showInfo = false;
    showInputFielVal = false;
    buttonLabel;

    buttonClicked(event)
    {
        this.buttonLabel = event.currentTarget.dataset.id;
        this.showInfo = true;
        this.showInputFielVal = true;
        //this.template.querySelector('.input1').value = buttonLabel + ' is Clicked';
    }

    renderedCallback()
    {
        if(this.showInputFielVal)
        {
            this.template.querySelector('.input1').value = this.buttonLabel + ' is Clicked';
            this.showInputFielVal = false;
        }
    }
}