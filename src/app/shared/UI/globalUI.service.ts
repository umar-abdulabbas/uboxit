import { Injectable } from '@angular/core';


@Injectable()
export class UserExpStyleService {
  // scroll top of the screen
  scrollToTop() {
    const body = document.body; // For Safari
    const html = document.documentElement; // Chrome, Firefox, IE and Opera
    body.scrollTop = 0;
    html.scrollTop = 0;
  }
  //Find Device
  getDeviceInformation() {
    const userAgent = navigator.userAgent || navigator.vendor || navigator.platform.toLowerCase();
    return /android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(userAgent);    
  }
  //Find URL Path
  getPathURL(){
    const findPathUrl = window.location.href.split('/').pop();
    return findPathUrl;
  }

}
