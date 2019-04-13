import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionshipListComponent }      from './championship/championship-list/championship-list.component';

const routes: Routes = [
  {
    path: 'championships', component: ChampionshipListComponent
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}