import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {
	barcelona = {
		name: "Barcelona", img: "http://www.scotzine.com/wp-content/uploads/fc-barcelona-wallpaper.jpg"
	}

	realMadrid = {
		name: "Real Madrid", img: "http://fcnaija.com/public/images/22e054c7353fef5c3c51de7122125971.jpg"
	}

	teams: any[] = [
		this.realMadrid,
		this.barcelona
	];
	constructor() { }

	list(): any[] {
		return this.teams;
	}

	playersByChampionship(championship: any): any[] {
		return this.teams;
	}
}
