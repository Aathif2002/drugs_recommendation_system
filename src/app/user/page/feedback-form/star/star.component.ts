import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() maxRating=5;
 maxRatingArr:any=[];
 @Input() SelectedStar=0;

  constructor() { }
  HandleMouseEnter(index:number)
  {
    this.SelectedStar=index+1;
  }

  ngOnInit(): void {
    this.maxRatingArr=Array(this.maxRating).fill(0);
  }

}



