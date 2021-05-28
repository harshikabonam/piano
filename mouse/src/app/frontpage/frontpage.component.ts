import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private router : Router) { }
  public time;
  public interval;
  public c;
  public d=-1;
    public timeLeft: number = 10;
  ngOnInit() {
  }
  startTimer() {
    console.log(this.timeLeft)
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.time=  this.timeLeft
        console.log(this.timeLeft)
        this.c++;
        this.d++;
      } 
      if(this.c===this.d-1)
      {
        let x=this.c;
      }
      if(this.timeLeft==5)
      {
        this.router.navigate(['/game']);
        console.log(this.timeLeft)
        this. timeLeft = 10;
        clearInterval(this.interval);
        console.log(this.timeLeft)
        
      }
      // if(this.timeLeft===2) {
      //   this.router.navigate(['/game']);
      //  this. timeLeft = 10;
      //  clearInterval(this.interval);
      //  console.log(this.timeLeft)
      // }
    },1000)
  }
}
