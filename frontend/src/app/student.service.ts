import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface myData {
  success: boolean,
  message: string
}
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http: HttpClient) { }
  getSomeData() {
    return this.http.get<myData>('/api/getUser.php')
  }
}
