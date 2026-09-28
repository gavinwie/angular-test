import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export const mockDeadlineInterceptor: HttpInterceptorFn = (req, next) => {
  const deadlineDate = new Date("2026-09-29")
  var secondsLeft = Math.floor((deadlineDate.getTime() - Date.now())/1000)
  console.log(secondsLeft)
  if (req.url === '/api/deadline') {
    return of(
      new HttpResponse({
        status: 200,
        body: { secondsLeft: secondsLeft },
      }),
    );
  }
  return next(req);
};
