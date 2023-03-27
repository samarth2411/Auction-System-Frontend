import { Component } from '@angular/core';

@Component({
  selector: 'sam-root',
  templateUrl: './app.component.html',
  // template:`<h1>Hello from inline Template</h1>
  // <p>Angular is awesome</p>
  // `,
  styleUrls: ['./app.component.scss']
  // styles:[`h1{color:red}`]
})
export class AppComponent {
  title = 'angularapp';
}
