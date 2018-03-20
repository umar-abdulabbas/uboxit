import { Injectable } from '@angular/core';

export enum Features {
  Login = 'LOGIN',
  Location = 'LOCATION',
  Adyen = 'ADYEN'
}

@Injectable()
export class FeatureSwitch {
  static DISABLED_FEATURES = [
    Features.Login,
    Features.Location,
    Features.Adyen
  ];

  static isLoginFeatureEnabled() {
    return !FeatureSwitch.DISABLED_FEATURES.includes(Features.Login);
  }

  static isLocationFeatureEnabled() {
    return !FeatureSwitch.DISABLED_FEATURES.includes(Features.Location);
  }

  static isAdyenPaymentEnabled() {
    return !FeatureSwitch.DISABLED_FEATURES.includes(Features.Adyen);
  }
}
