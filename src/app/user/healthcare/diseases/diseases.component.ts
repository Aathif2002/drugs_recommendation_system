import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent {

  id:any;
  complaints:any;
   Health:any;
   Health1:any;
  constructor(private hs:HomeService,private ar:ActivatedRoute){
    this.hs.getFeedback().subscribe({
      next:(data:any)=>this.complaints=data,
      error:()=>this.complaints=[]
    })
    this.ar.params.subscribe(
       {
         next: (params)=>{ 
          this.id =params['id']
          this.readData()
         },
         error: () => this.id = 0
       }
     )
  }

  readData(){


     this.hs.getDetail(this.id).subscribe({
         next: (data:any)=> this.Health =data,
         error: ()=> this.Health = {}
     })
  }
  readData1(){
    this.hs.getDetail1().subscribe({
      next: (data:any)=> this.Health1 =data,
      error: ()=> this.Health1 = {}
  })

  }
  setfilterhealthcare(health:string){
    this.hs.filterhealthcare = health;
  }
}
