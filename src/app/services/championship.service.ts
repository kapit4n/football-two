import { Injectable } from '@angular/core';
import { MockChampionship } from '../mock/mock-championship';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ChampionshipService {
	mock: MockChampionship;

	matches: any[] = [
		{ local: "Barcelona", visit: "Madrid", localGoal: 0, visitGoal: 0, matchDate: new Date() },
		{ local: "Valencia", visit: "Atletic", localGoal: 0, visitGoal: 0, matchDate: new Date() }
	];

	championships: any[] = [{
		name: "champions league",
		description: "Championship description",
		img: "http://www.fm-base.co.uk/forum/attachments/football-manager-2015-manager-stories/827338d1429828443-we-liverpool-expectations-so-high-championsleaguebanner800_en.jpg",
		matches: this.matches
	}];

	constructor() {
		this.mock = new MockChampionship();
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
