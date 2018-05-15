import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'addpp1';
  user = {
    id: 1,
    name: 'Chuck Norris',
    showSecret: false,
    hobbies: ['eat', 'sleep']
  };

  ngOnInit(): void {
  }

  callMe(nr: number) {
    alert(`Hello ${nr}`);
  }

  private handleMouse() {
    console.log('move');
  }

}
