import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
public x;
public p;
public a ;
  constructor() { }

  ngOnInit() {
  }
  public myShows = ["../../assets/choco.gif","../../assets/cake.webp","../../assets/c.gif"];
fun()
{
 this.a = this.myShows[Math.floor(Math.random() * this.myShows.length)];
  console.log(this.a);
  this.x=true;
}
}
