import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent implements OnInit {
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
