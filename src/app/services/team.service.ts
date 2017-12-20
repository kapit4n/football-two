import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TeamService {
	barcelona = {
		id: 1,
		name: "Barcelona",
		img: "http://static.tumblr.com/6128b90a182ae6c0bc37190cbc700ad0/muykxvc/fo8nad02f/tumblr_static_7g0xraagoo84sogssw0swssg4.jpg",
		icon: "http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png"
	}

	realMadrid = {
		id: 2,
		name: "Real Madrid",
		img: "http://www.dawsontravel.ie/assets/userfiles/slide%20Real%202.jpg",
		icon: "http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png"
	}

	chelsea = {
		id: 3,
		name: "Chelsea",
		img: "http://www.f-covers.com/cover/chelsea-fc-facebook-cover-timeline-banner-for-fb.jpg",
		icon: "http://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Chelsea-FC-icon.png"
	}

	psg = {
		id: 4,
		name: "PSG",
		img: "https://www.nvsoccer.com/media/catalog/category/PSG_BANNER.png",
		icon: "http://www.futbol24.com/upload/team/France/Paris-St-Germain.png"
	}

	teams: any[] = [
		this.realMadrid,
		this.barcelona,
		this.chelsea,
		this.psg
	];
	constructor() { }

	list(): any[] {
		return this.teams;
	}

	getTeams(): Observable<any[]> {
		return of(this.teams);
	}

	teamsByChampionship(championship: any): any[] {
		return this.teams;
	}

	getTeamById(id: any): Observable<any> {
		return of(this.teams[id - 1]);
	}
}
