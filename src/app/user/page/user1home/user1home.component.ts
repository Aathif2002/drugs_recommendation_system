import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user1home',
  templateUrl: './user1home.component.html',
  styleUrls: ['./user1home.component.css']
})
export class User1homeComponent  {

  @Input() aboutus:any;
}
