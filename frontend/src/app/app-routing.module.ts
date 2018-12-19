import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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


const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'about', component: AboutUsComponent
      }
    ]
  },
  {
    path:'admin',
    component:AdminLayoutComponent ,
    children:[
      {
        path:'',redirectTo:'students',pathMatch:'full'
      },
      {
        path:'students',component:StudentListComponent
      },
      {
        path:'addStudent',component:AddStudentComponent
      },
      {
        path:'updateStudent',component:UpdateStudentComponent
      },
      {
        path:'faculty',component:FacultyListComponent
      },
      {
        path:'addFaculty',component:AddFacultyComponent
      },
      {
        path:'advancedBoard',component:AdvanceBoardListComponent
      },
      {
        path:'addAdvancedBoard',component:AddAdvancedBoardComponent
      },
      {
        path:'reviewers',component:ReviewerListComponent
      },
      {
        path:'addReviewers',component:AddReviewerComponent
      }
    ]
  },
  {
    path:'student',
    component:StudentLayoutComponent ,
    children:[
      {
        path:'',redirectTo:'progress',pathMatch:'full'
      },
      {
        path:'progress',component:ProgressComponent
      },
      {
        path:'report',component:ReportsComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
