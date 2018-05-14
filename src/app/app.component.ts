import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 title = 'addpp1';
  user = {
    id: 1,
    name: 'Chuck Norris',
    showSecret: false,
    hobbies: ['eat', 'sleep']
  };

  callMe(nr: number) {
    alert(`Hello ${nr}`);
  }

  private handleMouse() {
    console.log('move');
  }

  constructor() { }
}
