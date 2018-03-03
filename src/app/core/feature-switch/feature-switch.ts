import { Injectable } from '@angular/core';

export enum Features {
  Login = 'LOGIN',
  // Location = 'LOCATION'
}

@Injectable()
export class FeatureSwitch {
  static DISABLED_FEATURES = [
    Features.Login
  ];

  static isLoginFeatureEnabled() {
    return !FeatureSwitch.DISABLED_FEATURES.includes(Features.Login);
  }
}
