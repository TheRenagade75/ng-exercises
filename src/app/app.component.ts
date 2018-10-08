import { Component } from '@angular/core';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app works!';
  isCollapsed: boolean = true;

  constructor() {

  }
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
  // tslint:disable-next-line:member-ordering
  count = 0;

  clickCount(): void {
     // tslint:disable-next-line:no-increment-decrement
    this.count++;
  }
}
