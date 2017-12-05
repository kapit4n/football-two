import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';
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


@NgModule({
	exports: [
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
	declarations: [ChampionshipListComponent, ChampionshipInfoComponent, ChampionshipEditComponent, ChampionshipNewComponent, TeamNewComponent, TeamInfoComponent, TeamEditComponent, TeamListComponent, PlayerListComponent, PlayerInfoComponent, PlayerEditComponent, PlayerNewComponent, MatchListComponent, MatchEditComponent, MatchInfoComponent, MatchNewComponent, FixtureNewComponent, FixtureListComponent, FixtureEditComponent, FixtureInfoComponent]
})
export class AllMaterialModule { }

const appRoutes: Routes = [
	{ path: 'crisis-center', component: ChampionshipListComponent },
	{ path: '**', component: ChampionshipListComponent }
];


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AllMaterialModule, FormsModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
