import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AlertInvoker } from '../services/alert-invoker.service';
import { ErrorsAggregator } from '../errors/errors-aggregator';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private alertInvoker: AlertInvoker,
              private errorsAggregator: ErrorsAggregator) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .do(ev => {
        if (ev instanceof HttpResponse && ev.body && ev.body.notification) {
          console.log(ev.body.notification.code + ev.body.notification.description);
          this.errorsAggregator.push(ev.body.notification.description);
          // this.alertInvoker.invokeNotification(ev.body.notification.description);
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
  }
}
