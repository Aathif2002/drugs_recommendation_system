import { Component, Input , OnInit } from '@angular/core';
import scrollbar from "smooth-scrollbar"

@Component({
  selector: 'app-health-box',
  templateUrl: './health-box.component.html',
  styleUrls: ['./health-box.component.css']
})
export class HealthBoxComponent  {
  
  @Input() health:any;

  
}

