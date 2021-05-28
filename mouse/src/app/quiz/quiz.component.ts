import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public pl="";
  public key="";
  public xcv;
  public xlm;
  public show="";
  public p;
  public sor="";
  public l;
  public c;
  public result="";
  public per;
  public audio;
  public au1;
  public au2;
  public au3;
  public au4;
  public au5;
  public au6;
  public au7;
  public au8;
  public au9;
  public au10;
  public au11;
  public au12;
  public au13;
  public au14;
  public au15;
  public au16;
  public au17;
  public au18;
  public au19;
  public au20;
  public au21;
  public bau1;
  public bau2;
  public bau3;
  public bau4;
  public bau5;
  public bau6;
  public bau7;
  public bau8;
  public bau9;
  public bau10;
  public bau11;
  public bau12;
  public bau13;
  public bau14;
  public bau15;
  public audio1;
  public val;
  public abcd;
  public k;
  public rest;
  public count=0;
  public myShows = ['../../assets/c3.wav','../../assets/g3.wav','../../assets/d3.wav',
  '../../assets/e3.wav','../../assets/f3.wav','../../assets/a3.wav','../../assets/b3.wav',
'../../assets/c4.wav','../../assets/d4.wav','../../assets/e4.wav','../../assets/f4.wav',
'../../assets/g4.wav','../../assets/a4.wav','../../assets/b4.wav','../../assets/c5.wav',
'../../assets/d5.wav','../../assets/e5.wav','../../assets/f5.wav','../../assets/g5.wav',
'../../assets/da5.flac','../../assets/b5.wav','../../assets/sc3.wav','../../assets/sd3.flac',
'../../assets/sf3.wav','../../assets/sg3.wav','../../assets/sa3.mp3','../../assets/sc4.ogg',
'../../assets/sd4.ogg','../../assets/sf4.wav','../../assets/sg4.mp3','../../assets/sa4.mp3',
'../../assets/sc5.wav','../../assets/sd5.wav','../../assets/sf5.wav','../../assets/sg5.wav',
'../../assets/sa5.wav' ];
  constructor(private router : Router) { }

  ngOnInit() {
  }
  again()
  {
    console.log("harshika");
    this.abcd=false;
  }
  play(){
   
 this.count=0;
    this.audio1 = new Audio();
    this.au1 = new Audio();
    this.au2 = new Audio();
    this.au3 = new Audio();
    this.au4 = new Audio();
    this.au5 = new Audio();
    this.au6 = new Audio();
    this.au7 = new Audio();
    this.au8 = new Audio();
    this.au9 = new Audio();
    this.au10 = new Audio();
    this.au11 = new Audio();
    this.au12 = new Audio();
    this.au13 = new Audio();
    this.au14 = new Audio();
    this.au15 = new Audio();
    this.au16 = new Audio();
    this.au17 = new Audio();
    this.au18 = new Audio();
    this.au19 = new Audio();
    this.au20 = new Audio();
    this.au21 = new Audio();
    this.bau1 = new Audio();
    this.bau2 = new Audio();
    this.bau3 = new Audio();
    this.bau4 = new Audio();
    this.bau5 = new Audio();
    this.bau6 = new Audio();
    this.bau7 = new Audio();
    this.bau8 = new Audio();
    this.bau9 = new Audio();
    this.bau10 = new Audio();
    this.bau11 = new Audio();
    this.bau12 = new Audio();
    this.bau13 = new Audio();
    this.bau14 = new Audio();
    this.bau15 = new Audio();
   
    this. au1.src="../../assets/c3.wav";
    this.au1.play();
    this.au1.pause();
    this. au2.src="../../assets/d3.wav";
    this.au2.play();
    this.au2.pause();
    this. au3.src="../../assets/e3.wav";
    this.au3.play();
    this.au3.pause();
    this. au4.src="../../assets/f3.wav";
    this.au4.play();
    this.au4.pause();
    this. au5.src="../../assets/g3.wav";
    this.au5.play();
    this.au5.pause();
    this. au6.src="../../assets/a3.wav";
    this.au6.play();
    this.au6.pause();
    this. au7.src="../../assets/b3.wav";
    this.au7.play();
    this.au7.pause();
    this. au8.src="../../assets/c4.wav";
    this.au8.play();
    this.au8.pause();
    this. au9.src="../../assets/d4.wav";
    this.au9.play();
    this.au9.pause();
    this. au10.src="../../assets/e4.wav";
    this.au10.play();
    this.au10.pause();
    this. au11.src="../../assets/f4.wav";
    this.au11.play();
    this.au11.pause();
    this. au12.src="../../assets/g4.wav";
    this.au12.play();
    this.au12.pause();
    this. au13.src="../../assets/a4.wav";
    this.au13.play();
    this.au13.pause();
    this. au14.src="../../assets/b4.wav";
    this.au14.play();
    this.au14.pause();
    this. au15.src="../../assets/c5.wav";
    this.au15.play();
    this.au15.pause();
    this. au16.src="../../assets/d5.wav";
    this.au16.play();
    this.au16.pause();
    this. au17.src="../../assets/e5.wav";
    this.au17.play();
    this.au17.pause();
    this. au18.src="../../assets/f5.wav";
    this.au18.play();
    this.au18.pause();
    this. au19.src="../../assets/g5.wav";
    this.au19.play();
    this.au19.pause();
    this. au20.src="../../assets/da5.flac";
    this.au20.play();
    this.au20.pause();
    this. au21.src="../../assets/b5.wav";
    this.au21.play();
    this.au21.pause();
    this. au1.src="../../assets/sc3.wav";
    this.bau1.play();
    this.bau1.pause();
    this. bau2.src='../../assets/sd3.flac';
    this.bau2.play();
    this.bau2.pause();
    this. bau3.src="../../assets/sf3.wav";
    this.bau3.play();
    this.bau3.pause();
    this. bau4.src="../../assets/sg3.wav";
    this.bau4.play();
    this.bau4.pause();
    this. bau5.src="../../assets/sa3.mp3";
    this.bau5.play();
    this.bau5.pause();
    this. bau6.src="../../assets/sc4.ogg";
    this.bau6.play();
    this.bau6.pause();
    this. bau7.src="../../assets/sd4.ogg";
    this.bau7.play();
    this.bau7.pause();
    this. bau8.src="../../assets/sf4.wav";
    this.bau8.play();
    this.bau8.pause();
    this. bau9.src="../../assets/sg4.mp3";
    this.bau9.play();
    this.bau9.pause();
    this. bau10.src="../../assets/sa4.mp3";
    this.bau10.play();
    this.bau10.pause();
    this. bau11.src="../../assets/sc5.wav";
    this.bau11.play();
    this.bau11.pause();
    this. bau12.src="../../assets/sd5.wav";
    this.bau12.play();
    this.bau12.pause();
    this. bau13.src="../../assets/sf5.wav";
    this.bau13.play();
    this.bau13.pause();
    this. bau14.src="../../assets/sg5.wav";
    this.bau14.play();
    this.bau14.pause();
    this. bau15.src="../../assets/sa5.wav";
    this.bau15.play();
    this.bau15.pause();
    // audio.src = "http://www.schillmania.com/projects/soundmanager2/demo/mpc/audio/CHINA_1.mp3";
    this.per=true;
    this.val=true;
   this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
    this.p=this.audio1.src;
    console.log(this.p);
    this.audio1.play();
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }
  
  c3(){
    this.audio = new Audio();
    this.audio.src="../../assets/c3.wav";
   this.l=this.audio.src;
    this.audio.play();
    this.pl="C3";
    this.key="White Key";
    this.xcv=true;
    // console.log(this.l);
    // console.log(this.p);
    // const data = {
    //  count1:this.count,
    // };
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      this.audio1.play();
      console.log(this.audio1,this.audio);
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
    
  }
  d3(){
   this. audio = new Audio();
   this .audio.src="../../assets/d3.wav";
   this.audio.play();
    this.pl="D3";
    this.key="White Key";
    this.xcv=true;
    this.l=this .audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
      
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
      this. audio.pause();
      this. audio1.pause();
        // this.router.navigate(['/fail']);
        this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  e3(){
    this. audio = new Audio();
    this.audio.src="../../assets/e3.wav";
    this.audio.play();
    this.pl="E3";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
      
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
      this. audio.pause();
      this. audio1.pause();
        // this.router.navigate(['/fail']);
        this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    } }
  f3(){
    this.audio = new Audio();
    this.audio.src="../../assets/f3.wav";
    this.audio.play();
    this.pl="F3";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
      
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
      this. audio.pause();
      this. audio1.pause();
        // this.router.navigate(['/fail']);
        this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    } }
  g3(){
    this.audio = new Audio();
    this.audio.src="../../assets/g3.wav";
    this.audio.play();
    this.pl="G3";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
      
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
   this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    } }
  a3(){
    this. audio = new Audio();
    this.audio.src="../../assets/a3.wav";
    this.audio.play();
    this.pl="A3";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
      
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
      this. audio.pause();
      this. audio1.pause();
        // this.router.navigate(['/fail']);
        this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  b3(){
    this.audio = new Audio();
    this.audio.src="../../assets/b3.wav";
    this.audio.play();
    this.pl="B3";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
      
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    // { 
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
      this. audio.pause();
      this. audio1.pause();
        // this.router.navigate(['/fail']);
        this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    } }
  c4(){
    this.audio = new Audio();
    this.audio.src="../../assets/c4.wav";
    this.audio.play();
    this.pl="C4";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
      
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else

    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    } }
  d4(){
    this. audio = new Audio();
    this.audio.src="../../assets/d4.wav";
    this.audio.play();
    this.pl="D4";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  e4(){
    this.audio = new Audio();
    this.audio.src="../../assets/e4.wav";
    this.audio.play();
    this.pl="E4";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  f4(){
    this. audio = new Audio();
    this.audio.src="../../assets/f4.wav";
    this.audio.play();
    this.pl="F4";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   // console.log("harshika")
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();// this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    } }
  g4(){
    this. audio = new Audio();
    this.audio.src="../../assets/g4.wav";
    this.audio.play();
    this.pl="G4";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   // console.log("harshika")
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  a4(){
    this. audio = new Audio();
    this.audio.src="../../assets/a4.wav";
    this.audio.play();
    this.pl="A4";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    } }
  b4(){
    this. audio = new Audio();
    this.audio.src="../../assets/b4.wav";
    this.audio.play();
    this.pl="B4";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    } }
  c5(){
    this. audio = new Audio();
    this.audio.src="../../assets/c5.wav";
    this. audio.play();
    this.pl="C5";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  d5(){
    this.audio = new Audio();
    this.audio.src="../../assets/d5.wav";
    this.audio.play();
    this.pl="d5";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  e5(){
    this. audio = new Audio();
    this.audio.src="../../assets/e5.wav";
    this.audio.play();
    this.pl="E5";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  f5(){
    this. audio = new Audio();
    this.audio.src="../../assets/f5.wav";
    this.audio.play();
    this.pl="F5";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    } }
  g5(){
    this.audio = new Audio();
    this.audio.src="../../assets/g5.wav";
    this.audio.play();
    this.pl="G5";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    } }
  a5(){
    this. audio = new Audio();
    this.audio.src="../../assets/da5.flac";
    this. audio.play();
    this.pl="A5";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    } }
  b5(){
    this. audio = new Audio();
    this. audio.src="../../assets/b5.wav";
    this. audio.play();
    this.pl="B5";
    this.key="White Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  c31(){
    this. audio = new Audio();
    this. audio.src="../../assets/sc3.wav";
    this. audio.play();
    this.pl="#C3";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  d31(){
    this. audio = new Audio();
    this. audio.src="../../assets/sd3.flac";
    this. audio.play();
    this.pl="#D3";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  f31(){
    this. audio = new Audio();
    this.audio.src="../../assets/sf3.wav";
    this.audio.play();
    this.pl="#F3";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }

    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }}
  g31(){
    this. audio = new Audio();
    this.audio.src="../../assets/sg3.wav";
    this.audio.play();
    this.pl="#G3";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }
  a31(){
    this. audio = new Audio();
    this.audio.src="../../assets/sa3.mp3";
    this.audio.play();
    this.pl="#A3";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   // console.log("harshika")
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }
  c41(){
    this. audio = new Audio();
    this. audio.src="../../assets/sc4.ogg";
    this. audio.play();
    this.pl="#C4";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }
  d41(){
    this. audio = new Audio();
    this.audio.src="../../assets/sd4.ogg";
    this.audio.play();
    this.pl="#D4";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }
  f41(){
    this. audio = new Audio();
    this.audio.src="../../assets/sf4.wav";
    this.audio.play();
    this.pl="#F4";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   // console.log("harshika")
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }
  g41(){
    this. audio = new Audio();
    this.audio.src="../../assets/sg4.mp3";
    this.audio.play();
    this.pl="#G4";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   // console.log("harshika")
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }
  a41(){
    this. audio = new Audio();
    this. audio.src="../../assets/sa4.mp3";
    this. audio.play();
    this.pl="#A4";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   // console.log("harshika")
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }
  c51(){
    this. audio = new Audio();
    this.audio.src="../../assets/sc5.wav";
    this.audio.play();
    this.pl="#C5";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   // console.log("harshika")
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
      // this.router.navigate(['/fail']);
      this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }
  d51(){
    this. audio = new Audio();
    this. audio.src="../../assets/sd5.wav";
    this. audio.play();
    this.pl="#D5";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   // console.log("harshika")
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }
  f51(){
    this. audio = new Audio();
    this.audio.src="../../assets/sf5.wav";
    this.audio.play();
    this.pl="#F5";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this.router.navigate(['/fail'])
    //   this. audio.pause();
    //   this. audio1.pause();
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }

  g51(){
    this. audio = new Audio();
    this.audio.src="../../assets/sg5.wav";
    this.audio.play();
    this.pl="#G5";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   // console.log("harshika")
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
     
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {
      this.rest=this.count;
    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }
  a51(){
    this. audio = new Audio();
    this.audio.src="../../assets/sa5.wav";
    this.audio.play();
    this.pl="#A5";
    this.key="Black Key";
    this.xcv=true;
    this.l=this.audio.src;
    // console.log(this.l);
    // console.log(this.p);
    // if(this.l===this.p)
    // {
    //   this. audio.pause();
    //   this. audio1.pause();
    //   // console.log("harshika")
    //   this.router.navigate(['/result'])
    // }
    // else
    
    // {
    //    this. audio.pause();
    // this. audio1.pause();
    //   this.router.navigate(['/fail'])
    // }
    if(this.l===this.p)
    {
      this.count++;
      console.log(this.count);
      this. audio.pause();
      this.audio1 = new Audio();
      this. audio1.src = this.myShows[Math.floor(Math.random() * this.myShows.length)];
      this.p=this.audio1.src;
      console.log(this.p,this.l);
     
    
      this.audio1.play();
    // this. audio1.pause(); 
      // this.router.navigate(['/result'])
    }
    else
    {

    this. audio.pause();
    this. audio1.pause();
       // this.router.navigate(['/fail']);
       this.rest=this.count;
       this.abcd=true;
    }
    if(this.p===this. au1.src)
    {
      this.sor="White Key";
      this.k="key is c3";
    }
    if(this.p===this. au2.src)
    {
      this.sor="White Key";
      this.k="key is d3";
    }
    if(this.p===this. au3.src)
    {
      this.sor="White Key";
      this.k="key is e3";
    }
    if(this.p===this. au4.src)
    {
      this.sor="White Key";
      this.k="key is f3";
    }
    if(this.p===this. au5.src)
    {
      this.sor="White Key";
      this.k="key is g3";
    }
    if(this.p===this. au6.src)
    {
      this.sor="White Key";
      this.k="key is a3";
    }
    if(this.p===this. au7.src)
    {
      this.sor="White Key";
      this.k="key is b3";
    }
    if(this.p===this. au8.src)
    {
      this.sor="White Key";
      this.k="key is c4";
    }
    if(this.p===this. au9.src)
    {
      this.sor="White Key";
      this.k="key is d4";
    }
    if(this.p===this. au10.src)
    {
      this.sor="White Key";
      this.k="key is e4";
    }
    if(this.p===this. au11.src)
    {
      this.sor="White Key";
      this.k="key is f4";
    }
    if(this.p===this. au12.src)
    {
      this.sor="White Key";
      this.k="key is g4";
    }
    if(this.p===this. au13.src)
    {
      this.sor="White Key";
      this.k="key is a4";
    }
    if(this.p===this. au14.src)
    {
      this.sor="White Key";
      this.k="key is b4";
    }
    if(this.p===this. au15.src)
    {
      this.sor="White Key";
      this.k="key is c5";
    }
    if(this.p===this. au16.src)
    {
      this.sor="White Key";
      this.k="key is d5";
    }
    if(this.p===this. au17.src)
    {
      this.sor="White Key";
      this.k="key is e5";
    }
    if(this.p===this. au18.src)
    {
      this.sor="White Key";
      this.k="key is f5";
    }
    if(this.p===this. au19.src)
    {
      this.sor="White Key";
      this.k="key is g5";
    }
    if(this.p===this. au20.src)
    {
      this.sor="White Key";
      this.k="key is a5";
    }
    if(this.p===this. au21.src)
    {
      this.sor="White Key";
      this.k="key is b5";
    }
    if(this.p===this. bau1.src)
    {
      this.sor="Black Key";
      this.k="key is #c3";
    }
    if(this.p===this. bau2.src)
    {
      this.sor="Black Key";
      this.k="key is #d3";
    }
    if(this.p===this. bau3.src)
    {
      this.sor="Black Key";
      this.k="key is #f3";
    }
    if(this.p===this. bau4.src)
    {
      this.sor="Black Key";
      this.k="key is #g3";
    }
    if(this.p===this. bau5.src)
    {
      this.sor="Black Key";
      this.k="key is #a3";
    }
    if(this.p===this. bau6.src)
    {
      this.sor="Black Key";
      this.k="key is #c4";
    }
    if(this.p===this. bau7.src)
    {
      this.sor="Black Key";
      this.k="key is d4";
    }
    if(this.p===this. bau8.src)
    {
      this.sor="Black Key";
      this.k="key is #f4";
    }
    if(this.p===this.bau9.src)
    {
      this.sor="Black Key";
      this.k="key is #g4";
    }
    if(this.p===this. bau10.src)
    {
      this.sor="Black Key";
      this.k="key is #a4";
    }
    if(this.p===this. bau11.src)
    {
      this.sor="Black Key";
      this.k="key is #c5";
    }
    if(this.p===this. bau12.src)
    {
      this.sor="Black Key";
      this.k="key is #d5";
    }
    if(this.p===this. bau13.src)
    {
      this.sor="Black Key";
      this.k="key is #f5";
    }
    if(this.p===this. bau14.src)
    {
      this.sor="Black Key";
      this.k="key is #g5";
    }
    if(this.p===this. bau15.src)
    {
      this.sor="Black Key";
      this.k="key is #a5";
    }
  }



  
}
