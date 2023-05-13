import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { HomeService } from 'src/app/home.service';
import scrollbar from "smooth-scrollbar"

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css']
})
export class HealthcareComponent  {
  depertment=[
    "All",
    "Common Diseases",
    "Health and Care",
    "Viruses",
    "Mental Health",
    "Cancer",
    "Infection and Poisoning",
    "Eyes",
    "Muscles,Joint and Bones",
    "Skin, Hair and Nails",
    "Stomach",
    "Imune System",
    "Kidney"
  ]
  health:any;
  selected="All";
  constructor(private hs:HomeService ,private route: ActivatedRoute,
    private adminRecordService: AdminService){
    this.hs.getServices().subscribe(
      {
        next: (data:any)=> this.health = data,
        error: ()=> this.health=[]
      }
    )
    
  }
  

}

 
