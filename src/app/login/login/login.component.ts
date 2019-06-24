import { Component, OnInit } from '@angular/core';
import {FormsModule, FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Login_model } from 'src/app/model/login_model';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/map';
import { forkJoin, Observable } from 'rxjs';
import { LoginService } from 'src/app/taskmanager/login.service';
import { FilteredData } from 'src/app/model/filteredData';
import { Vendor } from 'src/app/model/vendor';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_form: FormGroup;
  login_model: Login_model;
  user:User;
  vendor:Vendor;
  contact: string='contact';
  error:string;
  public filteredUser="App";
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
    //  console.log(this.login_model.options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      // for(let i in this.user){
      //   if(this.login_model.contact == this.user[i].contact && this.login_model.options==this.user[i].type){
          
      //     console.log(this.login_model.options)
      //      this.rout.navigate(['/userdetails']);
      //   }
      // }
     if(this.login_form.value){
       
      this.login_form.reset();
      this.submitted=false;
    }
   }
  ngOnInit() {
   
console.log(this.filteredUser)
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  userDetail(){
    forkJoin([this._fetchuserdata.getUserData(),this._fetchuserdata.getVendorData()])
    .subscribe(data =>{this.user=data[0];
      this.vendor=data[1];
      console.log(this.vendor);{
      for(let i in this.user){
        if(this.login_model.contact == this.user[i].contact && this.login_model.options==this.user[i].type){
        //  this.filteredUser= this.user[i]
         console.log(this.filteredUser)
         this.rout.navigate(['/userdetails']);
         break;
          // console.log(this.login_model.options)
           
        }}
      }
    }) 
    
  }
  onDestroy(){
    console.log("appa")
  }
}
