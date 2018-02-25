import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AlertInvoker } from '../services/alert-invoker.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private  alertInvoker: AlertInvoker) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .do(ev => {
        if (ev instanceof HttpResponse && ev.body && ev.body.errorCode) {
          console.log(ev.body.errorCode);
          console.log(ev.body.errorMessage);
        } else if (ev instanceof HttpErrorResponse) {
          console.log(ev.status);
        }
      })
      .catch(err => {
        console.log(err);
        console.log(err.status);
        if (req.url.match(/customer-api\/individual/)) {
          this.alertInvoker.invokeNotification('invalid login');
        }
        return Observable.throw(err);
      });
    // return next.handle(req);
  }
}
