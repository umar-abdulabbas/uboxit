import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../shared/services/storage-service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private storageService: StorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!!this.storageService.getUser()) {
      // logged in - allow
      return true;
    }

    // not logged in so redirect to home page
    this.router.navigate(['/home']);
    return false;
  }
}
