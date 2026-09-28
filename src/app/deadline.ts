import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, of } from 'rxjs';

@Service()
export class Deadline {
    private http = inject(HttpClient);

    getDeadline() {
        return this.http.get<{ secondsLeft: number }>('/api/deadline');
    }
}