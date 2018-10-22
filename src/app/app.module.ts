import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatListModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatStepperModule,
} from '@angular/material';
import { ChampionshipListComponent } from './championship/championship-list/championship-list.component';
import { ChampionshipInfoComponent } from './championship/championship-info/championship-info.component';
import { ChampionshipEditComponent } from './championship/championship-edit/championship-edit.component';
import { ChampionshipNewComponent } from './championship/championship-new/championship-new.component';
import { TeamNewComponent } from './team/team-new/team-new.component';
import { TeamInfoComponent } from './team/team-info/team-info.component';
import { TeamEditComponent } from './team/team-edit/team-edit.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerInfoComponent } from './player/player-info/player-info.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerNewComponent } from './player/player-new/player-new.component';
import { MatchListComponent } from './match/match-list/match-list.component';
import { MatchEditComponent } from './match/match-edit/match-edit.component';
import { MatchInfoComponent } from './match/match-info/match-info.component';
import { MatchNewComponent } from './match/match-new/match-new.component';
import { FixtureNewComponent } from './fixture/fixture-new/fixture-new.component';
import { FixtureListComponent } from './fixture/fixture-list/fixture-list.component';
import { FixtureEditComponent } from './fixture/fixture-edit/fixture-edit.component';
import { FixtureInfoComponent } from './fixture/fixture-info/fixture-info.component';
import { ChampionshipService } from './services/championship.service';
import { TeamService } from './services/team.service';
import { PlayerService } from './services/player.service';
import { NewslettersComponent } from './common/newsletters/newsletters.component';
import { MatchVsComponent } from './common/match-vs/match-vs.component';
import { StandingTableComponent } from './common/standing-table/standing-table.component';
import { StandingSortPipe } from './common/standing-sort.pipe';
import { StandingTableGroupsComponent } from './common/standing-table-groups/standing-table-groups.component';


export class AllMaterialModule { }

const appRoutes: Routes = [
	{ path: 'championships/:id', component: ChampionshipInfoComponent },
	{ path: 'teams/:id', component: TeamInfoComponent },
	{ path: 'teams', component: TeamListComponent },
	{ path: 'players/:id', component: PlayerInfoComponent },
	{ path: '**', component: ChampionshipInfoComponent }
];


@NgModule({
	declarations: [
		AppComponent, ChampionshipListComponent, ChampionshipInfoComponent, 
		ChampionshipEditComponent, ChampionshipNewComponent, TeamNewComponent, 
		TeamInfoComponent, TeamEditComponent, TeamListComponent, PlayerListComponent, 
		PlayerInfoComponent, PlayerEditComponent, PlayerNewComponent, MatchListComponent, 
		MatchEditComponent, MatchInfoComponent, MatchNewComponent, FixtureNewComponent, 
		FixtureListComponent, FixtureEditComponent, FixtureInfoComponent, 
		NewslettersComponent, MatchVsComponent, StandingTableComponent, 
		StandingSortPipe, StandingTableGroupsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		),
		ReactiveFormsModule,
		CdkTableModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
	],
	providers: [ChampionshipService, TeamService, PlayerService],
	bootstrap: [AppComponent]
})
export class AppModule { }
