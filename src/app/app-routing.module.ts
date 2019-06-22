import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login/login.component';
import { UserdetailsComponent} from './listingscreen/userdetails/userdetails.component';
const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'userdetails', component:UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
