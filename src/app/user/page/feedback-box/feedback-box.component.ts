import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-feedback-box',
  templateUrl: './feedback-box.component.html',
  styleUrls: ['./feedback-box.component.css']
})
export class FeedbackBoxComponent  {

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
