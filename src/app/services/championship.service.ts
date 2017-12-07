import { Injectable } from '@angular/core';
import { MockChampionship } from '../mock/mock-championship';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ChampionshipService {
	mock: MockChampionship;

	matches: any[] = [{ local: "Barcelona", visit: "Madrid", localGoal: 0, visitGoal: 0, matchDate: new Date() },
	{ local: "Valencia", visit: "Atletic", localGoal: 0, visitGoal: 0, matchDate: new Date() }];

	championships: any[] = [{
		name: "champions league",
		description: "Championship description",
		img: "https://cdn.reviewsdir.com/wp-content/uploads/2016/06/UEFA-Champions-league-2016-17.jpg",
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
