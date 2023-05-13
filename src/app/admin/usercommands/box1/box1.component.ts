import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component  {

  complaints:any;
  constructor(private fs:HomeService)  {
    this.fs.getFeedback().subscribe(
       {
           next : (data:any)=> this.complaints =data,
           error:()=>this.complaints=[]
       }
    )
 }

}
