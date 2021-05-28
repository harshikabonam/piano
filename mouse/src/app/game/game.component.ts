import { Component, OnInit } from '@angular/core';
declare const myTest: any;
declare const myFunction: any;
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 public pl="";
 public key="";
 public xcv;
 public xlm;
 public show="";
 public music;
 public timeLeft: number = 5;
// public myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 
// 'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

public oldSounds = [];
  constructor() { }
  public audio;

  onClick() {
    // myTest();
    myFunction();
  }
  ngOnInit() {
  }
  
 x(){
    this.audio = new Audio();
    this.audio.src = "http://www.schillmania.com/projects/soundmanager2/demo/mpc/audio/CHINA_1.mp3";
    this.audio.play();
  }
  exit()
  {
this.audio.pause;
  }
  c3(){
    this.audio = new Audio();
    this.audio.src="../../assets/c3.wav";
    this.audio.play();
    this.pl="C3";
    this.key="White Key";
    this.xcv=true;
    // this.music=true;
  }
  d3(){
    this.audio = new Audio();
    this.audio.src="../../assets/d3.wav";
    this.audio.play();
    this.pl="D3";
    this.key="White Key";
    this.xcv=true;
  }
  e3(){
    this.audio = new Audio();
    this.audio.src="../../assets/e3.wav";
    this.audio.play();
    this.pl="E3";
    this.key="White Key";
    this.xcv=true;
  }
  f3(){
    this.audio = new Audio();
    this.audio.src="../../assets/f3.wav";
    this.audio.play();
    this.pl="F3";
    this.key="White Key";
    this.xcv=true;
  }
  
  g3(){
    this.audio = new Audio();
    this.audio.src="../../assets/g3.wav";
    this.audio.play();
    this.pl="G3";
    this.key="White Key";
    this.xcv=true;
  }
  a3(){
    this.audio = new Audio();
    this.audio.src="../../assets/a3.wav";
    this.audio.play();
    this.pl="A3";
    this.key="White Key";
    this.xcv=true;
  }
  b3(){
    this.audio = new Audio();
    this.audio.src="../../assets/b3.wav";
    this.audio.play();
    this.pl="B3";
    this.key="White Key";
    this.xcv=true;
  }
  c4(){
    this.audio = new Audio();
    this.audio.src="../../assets/c4.wav";
    this.audio.play();
    this.pl="C4";
    this.key="White Key";
    this.xcv=true;
  }
  d4(){
    this.audio = new Audio();
    this.audio.src="../../assets/d4.wav";
    this.audio.play();
    this.pl="D4";
    this.key="White Key";
    this.xcv=true;
  }
  e4(){
    this.audio = new Audio();
    this.audio.src="../../assets/e4.wav";
    this.audio.play();
    this.pl="E4";
    this.key="White Key";
    this.xcv=true;
  }
  f4(){
    this.audio = new Audio();
    this.audio.src="../../assets/f4.wav";
    this.audio.play();
    this.pl="F4";
    this.key="White Key";
    this.xcv=true;
  }
  g4(){
    this.audio = new Audio();
    this.audio.src="../../assets/g4.wav";
    this.audio.play();
    this.pl="G4";
    this.key="White Key";
    this.xcv=true;
  }
  a4(){
    this.audio = new Audio();
    this.audio.src="../../assets/a4.wav";
    this.audio.play();
    this.pl="A4";
    this.key="White Key";
    this.xcv=true;
  }
  b4(){
    this.audio = new Audio();
    this.audio.src="../../assets/b4.wav";
    this.audio.play();
    this.pl="B4";
    this.key="White Key";
    this.xcv=true;
  }
  c5(){
    this.audio = new Audio();
    this.audio.src="../../assets/c5.wav";
    this.audio.play();
    this.pl="C5";
    this.key="White Key";
    this.xcv=true;
  }
  d5(){
    this.audio = new Audio();
    this.audio.src="../../assets/d5.wav";
    this.audio.play();
    this.pl="d5";
    this.key="White Key";
    this.xcv=true;
  }
  e5(){
    this.audio = new Audio();
    this.audio.src="../../assets/e5.wav";
    this.audio.play();
    this.pl="E5";
    this.key="White Key";
    this.xcv=true;
  }
  f5(){
    this.audio = new Audio();
    this.audio.src="../../assets/f5.wav";
    this.audio.play();
    this.pl="F5";
    this.key="White Key";
    this.xcv=true;
  }
  g5(){
    this.audio = new Audio();
    this.audio.src="../../assets/g5.wav";
    this.audio.play();
    this.pl="G5";
    this.key="White Key";
    this.xcv=true;
  }
  a5(){
    this.audio = new Audio();
    this.audio.src="../../assets/da5.flac";
    this.audio.play();
    this.pl="A5";
    this.key="White Key";
    this.xcv=true;
  }
  b5(){
    this.audio = new Audio();
    this.audio.src="../../assets/b5.wav";
    this.audio.play();
    this.pl="B5";
    this.key="White Key";
    this.xcv=true;
  }
  c31(){
    this.audio = new Audio();
    this.audio.src="../../assets/sc3.wav";
    this.audio.play();
    this.pl="#C3";
    this.key="Black Key";
    this.xcv=true;
  }
  d31(){
    this.audio = new Audio();
    this.audio.src="../../assets/sd3.flac";
    this.audio.play();
    this.pl="#D3";
    this.key="Black Key";
    this.xcv=true;
  }
  f31(){
    this.audio = new Audio();
    this.audio.src="../../assets/sf3.wav";
    this.audio.play();
    this.pl="#F3";
    this.key="Black Key";
    this.xcv=true;
  }
  g31(){
    this.audio = new Audio();
    this.audio.src="../../assets/sg3.wav";
    this.audio.play();
    this.pl="#G3";
    this.key="Black Key";
    this.xcv=true;
  }
  a31(){
    this.audio = new Audio();
    this.audio.src="../../assets/sa3.mp3";
    this.audio.play();
    this.pl="#A3";
    this.key="Black Key";
    this.xcv=true;
  }
  c41(){
    this.audio = new Audio();
    this.audio.src="../../assets/sc4.ogg";
    this.audio.play();
    this.pl="#C4";
    this.key="Black Key";
    this.xcv=true;
  }
  d41(){
    this.audio = new Audio();
    this.audio.src="../../assets/sd4.ogg";
    this.audio.play();
    this.pl="#D4";
    this.key="Black Key";
    this.xcv=true;
  }
  f41(){
    this.audio = new Audio();
    this.audio.src="../../assets/sf4.wav";
    this.audio.play();
    this.pl="#F4";
    this.key="Black Key";
    this.xcv=true;
  }
  g41(){
    this.audio = new Audio();
    this.audio.src="../../assets/sg4.mp3";
    this.audio.play();
    this.pl="#G4";
    this.key="Black Key";
    this.xcv=true;
  }
  a41(){
    this.audio = new Audio();
    this.audio.src="../../assets/sa4.mp3";
    this.audio.play();
    this.pl="#A4";
    this.key="Black Key";
    this.xcv=true;
  }
  c51(){
    this.audio = new Audio();
    this.audio.src="../../assets/sc5.wav";
    this.audio.play();
    this.pl="#C5";
    this.key="Black Key";
    this.xcv=true;
  }
  d51(){
    this.audio = new Audio();
    this.audio.src="../../assets/sd5.wav";
    this.audio.play();
    this.pl="#D5";
    this.key="Black Key";
    this.xcv=true;
  }
  f51(){
    this.audio = new Audio();
    this.audio.src="../../assets/sf5.wav";
    this.audio.play();
    this.pl="#F5";
    this.key="Black Key";
    this.xcv=true;
  }

  g51(){
    this.audio = new Audio();
    this.audio.src="../../assets/sg5.wav";
    this.audio.play();
    this.pl="#G5";
    this.key="Black Key";
    this.xcv=true;
  }
  a51(){
    this.audio = new Audio();
    this.audio.src="../../assets/sa5.wav";
    this.audio.play();
    this.pl="#A5";
    this.key="Black Key";
    this.xcv=true;
  }
funct()
{
  this.audio;
  this.audio.pause();
}


  

}
