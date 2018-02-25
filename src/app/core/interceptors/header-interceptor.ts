import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../../shared/services/storage-service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const username = this.storageService.getUser();
    console.log(username);
    const headers: {} = {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    };
    if (!!username) {
      headers['x-uboxit-username'] = username;
    }
    const extendedReq = req.clone({setHeaders: headers});
    return next.handle(extendedReq);
  }
}
