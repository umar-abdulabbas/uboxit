import { Injectable} from '@angular/core';


@Injectable()
export class UserExpStyleService {
  // this function help to scroll top of the screen
  scrollToTop() {
    const body = document.body; // For Safari
    const html = document.documentElement; // Chrome, Firefox, IE and Opera
    body.scrollTop = 0;
    html.scrollTop = 0;
  }
  

}
