import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';

import 'rxjs/add/operator/do';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private router: Router) {

  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
        this.router.navigateByUrl('/login');
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));

  }
}
