import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h3>Deadline Countdown</h3>
    
  `
})
export class App {
}

bootstrapApplication(App);
