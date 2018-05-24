import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return route.queryParamMap && route.queryParamMap.get('key') === 'YWxsdGhlYmVzdHVib3hpdA==';
  }
}
