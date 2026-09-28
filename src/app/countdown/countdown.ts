import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { Deadline } from '../deadline';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.html',
})
export class Countdown implements OnInit, OnDestroy {
  secondsLeft = signal(0);
  private deadlineTimestamp: number | null = null;
  private timer: any;

  private deadlineService = inject(Deadline);

  ngOnInit() {
    this.deadlineService.getDeadline().subscribe(ts => {
      this.deadlineTimestamp = ts;
      this.updateSecondsLeft();

      this.timer = setInterval(() => {
        this.updateSecondsLeft();
      }, 1000);
    });
  }
  private updateSecondsLeft() {
    if (this.deadlineTimestamp == null) return;
    this.secondsLeft.set(Math.max(0, Math.round((this.deadlineTimestamp - Date.now()) / 1000)));
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}