import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControlName, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatCheckboxModule,MatIconModule, MatToolbarModule,
   MatMenuModule, MatLabel, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatRadioModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LoginComponent } from './login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService} from './taskmanager/login.service';
import { UserdetailsComponent } from './listingscreen/userdetails/userdetails.component';
import { VendordetailsComponent } from './listingscreen/vendordetails/vendordetails.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserdetailsComponent,
    VendordetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  exports:[MatButtonModule,
    MatCheckboxModule],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
