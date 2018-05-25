import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'app';

  /**
   * Only arrow function test
   * This rule can be set by adding https://goo.gl/a8951W
   * "only-arrow-functions": true,
   */
  testArrow() {
    this.title.split('').forEach(function(item) {
      /**
       * No console allowed use service insted
       * This rule can be set https://goo.gl/Rd8ndD
       */
      console.log(item);
    });
  }
}