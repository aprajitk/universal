import { Component, OnInit } from '@angular/core';
import {FormsModule, FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Login_model } from 'src/app/model/login_model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_form: FormGroup;
  login_model: Login_model;
  contact: string='contact';
  options: Array<string>=["Vendor", "User"];
  error:string;
  isInvalid:boolean;
  submitted:boolean=false;
  constructor( private fb: FormBuilder) {
    this.login_form= fb.group({
      'contact': [null, Validators.required],
      'options': [this.options.values[0]]
    })
   }
   get f(){
    return this.login_form.controls;
  }
  onSearchChange(contact : string) { 
    if(contact.length > 10){
      this.login_form.get(this.contact).setValue(contact.slice(0,10));
    }   
    // else this.error="enter num"
  } 
   onSubmit(){
     this.submitted= true;
     if(!this.login_form.value){
     return;}
     if(this.login_form.get(this.contact).value.length < 10){

     return this.error="enter 10 digit number";
     }
     
     console.log(this.login_form.value);
   }
  ngOnInit() {
    if(this.login_form.value){
       
      this.login_form.reset();
      this.submitted=false;
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  ngAfterViewInit(){
  }
}
