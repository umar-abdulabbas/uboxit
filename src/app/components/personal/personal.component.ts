import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login-service';
import { AlertInvoker } from '../../core/services/alert-invoker.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css', '../shared/header/header.component.css']
})
export class PersonalComponent implements OnInit {
  isActiveNonRegUser = false; // based on customer not reg
  isActiveRegUser = true; // based on customer logged in or not values

  model: any = {};
  newUserModel: any = {};

  message = this.alertInvoker.message;

  constructor(private loginService: LoginService,
              private alertInvoker: AlertInvoker) {
  }

  ngOnInit() {
  }

  showNonRegUser(): void {
    console.log('n');
    this.isActiveNonRegUser = true;
    this.isActiveRegUser = false;
  }

  showRegUser(): void {
    this.isActiveRegUser = true;
    this.isActiveNonRegUser = false;
  }

  logIn() {
    console.log(this.model);
    this.loginService.login(this.model.username, this.model.password);
  }

  signUp() {
    console.log(this.newUserModel);
    this.loginService.signUp(this.newUserModel);
  }
}
