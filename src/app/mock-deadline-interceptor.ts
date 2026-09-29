import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export const mockDeadlineInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === '/api/deadline') {
    const deadlineDate = new Date('2026-10-05T00:00:00');
    var secondsLeft = Math.ceil((deadlineDate.getTime() - Date.now()) / 1000);
    console.log(secondsLeft);
    return of(
      new HttpResponse({
        status: 200,
        body: { secondsLeft: secondsLeft },
      }),
    );
  }
  return next(req);
};
