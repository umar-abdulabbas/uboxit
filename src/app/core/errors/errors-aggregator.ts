import { Injectable } from '@angular/core';

@Injectable()
export class ErrorsAggregator {
  private errors: string[] = [];

  push(error) {
    this.errors.push(error);
  }

  pop() {
    return this.errors.pop();
  }
}
