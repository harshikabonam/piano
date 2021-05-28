import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
// public curtain;
public time;
public interval;
  public timeLeft: number = 5;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  
  
 x(event){
    var curtain=curtain;
  // event.srcElement.curtain.classList.toggle('active')
  console.log("harshi");
  // curtain.toggle('active')\
  // curtain.class.toggle('active')
  
  }

}
