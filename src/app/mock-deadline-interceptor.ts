import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export const mockDeadlineInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('interceptor saw:', req.url);
  if (req.url === '/api/deadline') {
    return of(
      new HttpResponse({
        status: 200,
        body: { secondsLeft: 120 },
      }),
    );
  }
  return next(req);
};
