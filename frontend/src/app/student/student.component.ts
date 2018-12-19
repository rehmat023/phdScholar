import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  message = "Loading...."
  constructor(private student: StudentService) { }

  ngOnInit() {
    this.student.getSomeData().subscribe(data => {
      this.message = data.message
    })
  }

}
