import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../models/login.model';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  login: LoginModel = {
    email: null,
    password: null
  };
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Phd Scholar | Login');
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.login))
  }

}
