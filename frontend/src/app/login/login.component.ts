import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../models/login.model';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  validationError = false
  login: LoginModel = {
    email: null,
    password: null,
    role: null
  };
  constructor(private titleService: Title, private Auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle('Phd Scholar | Login');
  }
  onSubmit() {
    this.Auth.getUserDetails(this.login.email, this.login.password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['student'])
        this.Auth.setLoggedIn(true)
      } else {
        this.validationError = true;
      }
    })
  }

}
