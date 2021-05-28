import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LikesComponent } from './likes/likes.component';
import { ClickComponent } from './click/click.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { FailComponent } from './fail/fail.component';
import { LoadComponent } from './load/load.component';
import { FrontpageComponent } from './frontpage/frontpage.component';


const routes: Routes = [
  {path:'' ,redirectTo:'/Main',pathMatch:'full'},
  {path:'Main',component:FrontpageComponent},
  {path:'Menu',component:MenuComponent},
  {path:'load',component:LoadComponent},
  {path:'fail',component:FailComponent},
  {path:'Quiz',component:QuizComponent},
 {path:'likes',component:LikesComponent},
 {path:'result',component:ResultComponent},
 {path:'click',component:ClickComponent},
 {path:'game',component:GameComponent},
 {path:"**",component:PagenotfoundComponent}  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LikesComponent,ClickComponent,PagenotfoundComponent
  ,LoadComponent,MenuComponent,QuizComponent,ResultComponent,FailComponent,FrontpageComponent];