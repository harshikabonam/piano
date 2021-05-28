import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let x=parseInt(this.route.snapshot.paramMap.get('id'));
  }
 

}
