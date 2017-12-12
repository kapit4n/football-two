import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TeamService {
	barcelona = {
		name: "Barcelona", img: "http://www.scotzine.com/wp-content/uploads/fc-barcelona-wallpaper.jpg"
	}

	realMadrid = {
		name: "Real Madrid", img: "http://fcnaija.com/public/images/22e054c7353fef5c3c51de7122125971.jpg"
	}

	chelsea = {
		name: "Chelsea", img: "http://fcnaija.com/public/images/22e054c7353fef5c3c51de7122125971.jpg"
	}

	psg = {
		name: "PSG", img: "http://fcnaija.com/public/images/22e054c7353fef5c3c51de7122125971.jpg"
	}

	teams: any[] = [
		this.realMadrid,
		this.barcelona
	];
	constructor() { }

	list(): any[] {
		return this.teams;
	}


	getTeams(): Observable<any[]> {
		return of(this.teams);
	}

	playersByChampionship(championship: any): any[] {
		return this.teams;
	}
}
