import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/taskmanager/login.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user:User;
  constructor( private _fetchuserdata:LoginService) { }

  ngOnInit() {
    this._fetchuserdata.getUserData().subscribe(data =>{this.user=data;

      
    })
    
  }


}
