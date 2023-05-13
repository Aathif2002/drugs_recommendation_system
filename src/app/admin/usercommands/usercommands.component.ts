import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-usercommands',
  templateUrl: './usercommands.component.html',
  styleUrls: ['./usercommands.component.css']
})
export class UsercommandsComponent  {
  enqiry:any;
  constructor(private fs:HomeService)  {
    this.fs.getEnqiry().subscribe(
       {
           next : (data:any)=> this.enqiry =data,
           error:()=>this.enqiry=[]
       }
    )
 }


}
