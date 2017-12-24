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

	championships: any[];

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
				id: 1,
				name: "Champions league",
				description: "Championship description",
				img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/UEFA_Champions_League_logo_2.svg/1067px-UEFA_Champions_League_logo_2.svg.png",
				banner: "http://www.fm-base.co.uk/forum/attachments/football-manager-2015-manager-stories/827338d1429828443-we-liverpool-expectations-so-high-championsleaguebanner800_en.jpg",
				matches: matchesChampionsLeague
			}, {
				id: 2,
				name: "La Liga",
				description: "La liga is a championship from Spain",
				img: "http://files.laliga.es/seccion_logos/laliga-h-16-9.jpg",
				banner: "https://img.planetafobal.com/2016/07/camisetas-de-laliga-de-espana-2016-2017-ds.jpg",
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
		return of(this.championships[id - 1]);
	}
}
