import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { Deadline } from '../deadline';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.html',
})
export class Countdown implements OnInit, OnDestroy {
  secondsLeft = signal(0);
  private timer: any;

  private deadlineService = inject(Deadline);

  ngOnInit() {
    this.deadlineService.getDeadline().subscribe(res => {
      this.secondsLeft.set(res.secondsLeft);

      this.timer = setInterval(() => {
        this.secondsLeft.set(this.secondsLeft() - 1);
      }, 1000);
    });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}