import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app';

  user = {
    id: 12,
    name: 'chuck Norris',
    hobbies: ['eat', 'sleep', 'drink']
  };

  user2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getHobbies() {
    if (this.user2) {
      //
    }
    return this.user.hobbies;
  }
}
