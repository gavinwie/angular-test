import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, of } from 'rxjs';

@Service()
export class Deadline {
    private http = inject(HttpClient);

    getDeadline() {
        // return this.http.get<{ secondsLeft: number }>('/api/deadline');
        // TEMP: hardcoded for local testing, no real backend
        return of({ secondsLeft: Math.floor(((new Date("2026-09-29")).getTime() - Date.now())/1000) }).pipe(
            map(res => res)
        );
    }
}