import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class HeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headers: {} = {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    };
    const extendedReq = req.clone({setHeaders: headers});
    return next.handle(extendedReq);
  }
}
