import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './body/homepage.component';

import { PlayersComponent } from './body/players.component';
import { SeasonComponent } from './body/season.component';
import { SeasonsComponent } from './body/seasons.component';
import { TeamsComponent } from './body/teams.component';
import { LayoutMainComponent } from './layout/layout-main.component';


const routes: Routes = [
  { path: 'Home', component: LayoutMainComponent },
  { path: 'Players', component: PlayersComponent },
  { path: 'Teams', component: TeamsComponent},
  { path: 'Seasons', component: SeasonsComponent },
  { path: 'Leaders', component: SeasonComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
