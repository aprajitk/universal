import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  @Input('userInfo') public user1;
  constructor() { 
  }
  ngOnInit() {
    console.log(this.user1)
  }
}
