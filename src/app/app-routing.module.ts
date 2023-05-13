import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsercommandsComponent } from './admin/usercommands/usercommands.component';
import { User1homeComponent } from './user/page/user1home/user1home.component';
import { Home4Component } from './user/page/home4/home4.component';
import { FeedbackComponent } from './user/feedback/feedback.component';
import { HealthcareComponent } from './user/healthcare/healthcare/healthcare.component';
import { DiseasesComponent } from './user/healthcare/diseases/diseases.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"usercommands",component:UsercommandsComponent},
  {
    path: "",
    component: Home4Component
  },
  {
    path: "userhome",
    component: Home4Component
  },
  {
    path:"feedback",
    component:FeedbackComponent
  },
  {
    path:"healthcare",
    component:HealthcareComponent
  },
  {path:"Health/:id",component:DiseasesComponent},
  {path:"healthcare1",component:HealthcareComponent},
  
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
