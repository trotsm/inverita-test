import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  value = '';

  constructor(private userService: UsersService) {
  }

  /**
   * Method which get user name from input
   * @param {string} value - users name
   */
  getName(value: string) {
    this.value = value;
    this.setUser({name: value});
  }

  /**
   * Method which send user name to DB
   * @param value
   */
  setUser(value: any) {
    this.userService.setUser(value).subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
  }
}
