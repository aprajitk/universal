import { FormGroup } from '@angular/forms';

export class Login_model{
    contact:string='contact';
    options:Array<string>;

    constructor(){
    
    }
    setLogin(form: FormGroup){
    this.contact = form.get('contact').value;
    this.options = form.get('options').value;
    }
}

