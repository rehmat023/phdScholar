import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor( private router: Router, private titleService: Title ){}
  title = 'Frontend';
}
