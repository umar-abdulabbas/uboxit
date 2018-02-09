import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injector } from '@angular/core';
import { StorageService } from '../../shared/services/storage-service';

export class HeaderInterceptor implements HttpInterceptor {

  // constructor(private injector: Injector) {
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const storageService = this.injector.get(StorageService);
    const username = 'customer2785@gmail.com'; // storageService.getUser();
    const headers: {} = {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    };
    const extendedReq = req.clone({setHeaders: headers});
    return next.handle(extendedReq);
  }
}
