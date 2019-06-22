import { Component, OnInit } from '@angular/core';
import {FormsModule, FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Login_model } from 'src/app/model/login_model';
import { User } from 'src/app/model/user';
import { Navigation } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/taskmanager/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_form: FormGroup;
  login_model: Login_model;
  user:User;
  contact: string='contact';
  options: Array<string>=["Vendor", "User"];
  error:string;
  isInvalid:boolean;
  submitted:boolean=false;
  constructor( private fb: FormBuilder, private rout:Router, private _fetchuserdata:LoginService) {
    this.login_form= fb.group({
      'contact': [null, Validators.required],
      'options': ['']
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
     this.login_model = new Login_model();
     this.login_model.setLogin(this.login_form);
     console.log(this.login_model);
     console.log(this.login_model.contact)
    //  if(this.login_form.get(this.login_model.contact).value.length < 10)
     if(this.login_model.contact.length<10)
     {

     return this.error="enter 10 digit number";
     }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      for(let i in this.user){
        if(this.login_model.contact == this.user[i].contact){
          console.log("app")
           this.rout.navigate(['/userdetails']);
        }
      }
     if(this.login_form.value){
       
      this.login_form.reset();
      this.submitted=false;
    }
   }
  ngOnInit() {
    this._fetchuserdata.getUserData().subscribe(data =>this.user=data) 

  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
