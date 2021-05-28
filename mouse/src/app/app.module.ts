import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { FailComponent } from './fail/fail.component';
import { LoadComponent } from './load/load.component';
import { FrontpageComponent } from './frontpage/frontpage.component';


@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   PagenotfoundComponent,
   GameComponent,
   MenuComponent,
   QuizComponent,
   ResultComponent,
   FailComponent,
   LoadComponent,
   FrontpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
