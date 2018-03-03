import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GenericErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) {
  }

  handleError(error: any): void {
    console.error(error);
    this.injector.get(Router).navigate(['/error']);
  }
}
