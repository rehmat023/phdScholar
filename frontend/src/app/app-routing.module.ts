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
