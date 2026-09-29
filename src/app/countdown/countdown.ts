import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { Deadline } from '../deadline';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.html',
})
export class Countdown implements OnInit, OnDestroy {
  secondsLeft = signal(0);
  formattedTime = computed(() => this.formatTime(this.secondsLeft()));
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

  private formatTime(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}