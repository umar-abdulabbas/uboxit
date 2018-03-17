import { Injectable } from '@angular/core';

export enum Features {
  Login = 'LOGIN',
  Location = 'LOCATION'
}

@Injectable()
export class FeatureSwitch {
  static DISABLED_FEATURES = [
    Features.Login,
   // Features.Location
  ];

  static isLoginFeatureEnabled() {
    return !FeatureSwitch.DISABLED_FEATURES.includes(Features.Login);
  }

  static isLocationFeatureEnabled() {
    return !FeatureSwitch.DISABLED_FEATURES.includes(Features.Location);
  }
}
