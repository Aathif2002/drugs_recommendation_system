import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { UsercommandsComponent } from './usercommands/usercommands.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Box1Component } from './usercommands/box1/box1.component';




const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  // children: [
  //   {
  //     path: "usercommands",
  //     component: UsercommandsComponent
  //   }
  // ]
}]


@NgModule({
  declarations: [
    HomeComponent,
    Admin1Component,
    Admin2Component,
    UsercommandsComponent,
    Box1Component,
  
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    
    ReactiveFormsModule
   
  ]
})
export class AdminModule { }
