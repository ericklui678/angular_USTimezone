import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: any = '';
  lastClick: Array<boolean> = [false, false, false, false, false];
  datePST() {
    this.date = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
    this.lastClick = [true, false, false, false, false];
  }
  dateMST() {
    this.date = new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })
    this.lastClick = [false, true, false, false, false];
  }
  dateCST() {
    this.date = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })
    this.lastClick = [false, false, true, false, false];
  }
  dateEST() {
    this.date = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    this.lastClick = [false, false, false, true, false];
  }
  dateClear() {
    this.date = '';
    this.lastClick = [false, false, false, false, false];
  }
}
