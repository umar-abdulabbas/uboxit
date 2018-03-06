import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GenericErrorHandler implements ErrorHandler {

  constructor(private injector: Injector,
              public zone: NgZone) {
  }

  handleError(error: any): void {
    console.error(error);
    this.zone.run(() => {this.injector.get(Router).navigate(['/error']); });
  }
}
