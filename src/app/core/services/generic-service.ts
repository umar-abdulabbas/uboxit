export const CHANNEL_ANDROID = 'Android';
export const CHANNEL_IOS = 'iOS';

export class GenericService {

  private mobileChannel: string;

  setMobileChannel(channel) {
    this.mobileChannel = channel;
  }

  getMobileChannel() {
    return this.mobileChannel;
  }
}
