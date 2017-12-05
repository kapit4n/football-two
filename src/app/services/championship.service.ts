import { Injectable } from '@angular/core';
import { MockChampionship } from '../mock/mock-championship';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ChampionshipService {
	mock: MockChampionship;
	championships: any[] = [{ local: "Barcelona", visit: "Madrid", localGoal: 0, visitGoal: 0, matchDate: new Date() },
	{ local: "Valencia", visit: "Atletic", localGoal: 0, visitGoal: 0, matchDate: new Date() }];
	constructor() {
		this.mock = new MockChampionship();
	}

	list(): any[] {
		return this.championships;
	}

	getChampionships(): Observable<any[]> {
		return of(this.championships);
	}
}
