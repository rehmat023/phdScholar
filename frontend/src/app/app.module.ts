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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { ProgressComponent } from './progress/progress.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    SidebarComponent,
    MainNavComponent,
    MainlayoutComponent,
    AboutUsComponent,
    StudentLayoutComponent,
    ProgressComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AuthGuard, AuthService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
