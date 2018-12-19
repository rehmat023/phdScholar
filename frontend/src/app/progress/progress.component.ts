import { Component, OnInit } from '@angular/core';
// import { StudentModel } from '../models/student.model';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  validationError = false
  // student: StudentModel = {
  //   email: null,
  //   password: null
  // };
  constructor() { }

  ngOnInit() {
  }

}
