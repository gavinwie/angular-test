import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Countdown } from './app/countdown/countdown';
import { appConfig } from './app/app.config';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h3>Deadline Countdown</h3>
    <app-countdown></app-countdown>
    
  `,
  imports: [Countdown]
})
export class App {
}

bootstrapApplication(App, appConfig);
