import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PlayersComponent } from './body/players.component';
import { SeasonComponent } from './body/season.component';
import { SeasonsComponent } from './body/seasons.component';
import { TeamsComponent } from './body/teams.component';
import { HomeComponent } from './layout/home.component';

const routes: Routes = [
  { path: 'Home', component: BodyComponent },
  { path: 'Players', component: PlayersComponent },
  { path: 'Teams', component: TeamsComponent},
  { path: 'Seasons', component: SeasonsComponent },
  { path: 'Leaders', component: SeasonComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
