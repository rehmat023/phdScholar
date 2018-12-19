import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { AuthService } from './auth.service'
import { StudentService } from './student.service'
import { AuthGuard } from './auth.guard'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
