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
import { HomepageComponent } from './body/homepage.component';
import { RouterLayoutComponent } from './layout/routing-layout.component';
import { TableComponent } from './body/table.component';
import { RowComponent } from './body/row.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './upperNav/user-info.component';
import { CreateAccComponent } from './body/createAcc.component';
import { FormsModule } from '@angular/forms';




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
    HomepageComponent,
    RouterLayoutComponent,
    TableComponent,
    RowComponent,
    UserInfoComponent,
    CreateAccComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    // import HttpClientModule after BrowserModule.
    HttpClientModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
