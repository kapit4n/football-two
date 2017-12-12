import { Injectable } from '@angular/core';
import { MockChampionship } from '../mock/mock-championship';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TeamService } from '../services/team.service'


@Injectable()
export class ChampionshipService {
	mock: MockChampionship;

	matches: any[] = [
		{ local: "Chelsea", visit: "Barcelona", localGoal: 0, visitGoal: 0, matchDate: new Date() },
		{ local: "Real Madrid", visit: "Psg", localGoal: 0, visitGoal: 0, matchDate: new Date() }
	];

	championships: any[] = [
		{
			name: "champions league",
			description: "Championship description",
			img: "http://www.fm-base.co.uk/forum/attachments/football-manager-2015-manager-stories/827338d1429828443-we-liverpool-expectations-so-high-championsleaguebanner800_en.jpg",
			matches: this.matches
		}, {
			name: "La Liga",
			description: "La liga is a championship from Spain",
			img: "http://files.laliga.es/seccion_logos/laliga-h-16-9.jpg",
			matches: this.matches
		}
	];

	constructor(private teamService: TeamService) {
		var matchesChampionsLeague: any[] = [
			{ local: teamService.chelsea, visit: teamService.barcelona, localGoal: 0, visitGoal: 0, matchDate: new Date() },
			{ local: teamService.realMadrid, visit: teamService.psg, localGoal: 0, visitGoal: 0, matchDate: new Date() }
		];
		var matchesLiga: any[] = [
			{ local: teamService.realMadrid, visit: teamService.barcelona, localGoal: 0, visitGoal: 0, matchDate: new Date() }
		];

		this.championships = [
			{
				name: "Champions league",
				description: "Championship description",
				img: "http://www.fm-base.co.uk/forum/attachments/football-manager-2015-manager-stories/827338d1429828443-we-liverpool-expectations-so-high-championsleaguebanner800_en.jpg",
				matches: matchesChampionsLeague
			}, {
				name: "La Liga",
				description: "La liga is a championship from Spain",
				img: "http://files.laliga.es/seccion_logos/laliga-h-16-9.jpg",
				matches: matchesLiga
			}
		];
	}

	list(): any[] {
		return this.championships;
	}

	getChampionships(): Observable<any[]> {
		return of(this.championships);
	}

	getChampionshipById(id: any): Observable<any> {
		return of(this.championships[0]);
	}
}
