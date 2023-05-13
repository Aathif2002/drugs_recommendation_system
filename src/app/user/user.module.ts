import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { User1homeComponent } from './page/user1home/user1home.component';
import { FeedbackBoxComponent } from './page/feedback-box/feedback-box.component';
import { FeedbackFormComponent } from './page/feedback-form/feedback-form.component';
import { Home4Component } from './page/home4/home4.component';
import { BoxComponent } from './page/feedback-box/box/box.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HealthcareComponent } from './healthcare/healthcare/healthcare.component';
import { DiseasesComponent } from './healthcare/diseases/diseases.component';
import { HealthBoxComponent } from './healthcare/health-box/health-box.component';
import { OneComponent } from './healthcare/one/one.component';
import { TypefilterPipe } from './healthcare/typefilter.pipe';
import { StarComponent } from './page/feedback-form/star/star.component';



const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "userhome",
      component: User1homeComponent
    },
    
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    User1homeComponent,
    FeedbackBoxComponent,
    FeedbackFormComponent,
    Home4Component,
    BoxComponent,
    FeedbackComponent,
    NavbarComponent,
    HealthcareComponent,
    DiseasesComponent,
    HealthBoxComponent,
    OneComponent,
    TypefilterPipe,
    StarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    // SharedModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
   
  ]
})
export class UserModule { }
