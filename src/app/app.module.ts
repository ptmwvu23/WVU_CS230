import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { PlayersComponent } from './body/players.component';
import { SeasonComponent } from './body/season.component';
import { SeasonsComponent } from './body/seasons.component';
import { TeamsComponent } from './body/teams.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { PlayerCardComponent } from './playerCard/player-card.component';
import { StatheadComponent } from './stathead/stathead.component';
import { UpperNavBarComponent } from './upperNav/upper-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './layout/home.component';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    UpperNavBarComponent,
    PlayerCardComponent,
    BodyComponent,
    LayoutMainComponent,
    StatheadComponent,
    PlayersComponent,
    TeamsComponent,
    SeasonsComponent,
    SeasonComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
