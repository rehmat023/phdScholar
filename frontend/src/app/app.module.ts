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
import { MatMenuModule, MatFormFieldModule,  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,MatRadioModule,MatInputModule, MatListModule,  MatGridListModule, MatCardModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { ProgressComponent } from './progress/progress.component';
import { ReportsComponent } from './reports/reports.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { ReviewerListComponent } from './reviewer-list/reviewer-list.component';
import { AdvanceBoardListComponent } from './advance-board-list/advance-board-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AddReviewerComponent } from './add-reviewer/add-reviewer.component';
import { AddAdvancedBoardComponent } from './add-advanced-board/add-advanced-board.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminSideaBarComponent } from './admin-sidea-bar/admin-sidea-bar.component';


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
    ReportsComponent,
    StudentListComponent,
    FacultyListComponent,
    ReviewerListComponent,
    AdvanceBoardListComponent,
    AddStudentComponent,
    AddFacultyComponent,
    AddReviewerComponent,
    AddAdvancedBoardComponent,
    UpdateStudentComponent,
    AdminLayoutComponent,
    AdminSideaBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
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
