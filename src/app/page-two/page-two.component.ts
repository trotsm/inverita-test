import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  public list;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(result => {
      this.list = result;
    });
  }
}
