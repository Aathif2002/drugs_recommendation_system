import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css']
})
export class Home4Component  {
  id:any;
  complaints:any;
   aboutus:any;
  constructor(private hs:HomeService,private ar:ActivatedRoute){
  //   this.hs.getFeedback().subscribe({
  //     next:(data:any)=>this.complaints=data,
  //     error:()=>this.complaints=[]
  //   })
  //   this.ar.params.subscribe(
  //      {
  //        next: (params)=>{ 
  //         this.id =params['id']
  //         this.readData()
  //        },
  //        error: () => this.id = 0
  //      }
  //    )
  // }

  // readData(){


     this.hs.getDetails().subscribe({
         next: (data:any)=> this.aboutus =data,
         error: ()=> this.aboutus = {}
     })
  }
    
}
  