import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  user = {
    id: 12,
    name: 'chuck Norris',
    hobbies: ['eat', 'sleep', 'drink']
  };

  user2 = 0;

  constructor() { }

  getHobbies() {
    if (this.user2) {
        //
    }
    return this.user.hobbies;
  }
}
