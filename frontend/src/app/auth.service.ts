import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
interface myData {
  success: boolean,
  message: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInStatus = false
  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }
  get isLoggedIn(){
    return this.loggedInStatus
  }
  constructor(private http: HttpClient) { }
  getUserDetails(email, password) {
    return this.http.post<myData>('/api/auth.php', {
      email,
      password
    })
  }
}
