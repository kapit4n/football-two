import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PlayerService {
	messi = { name: "Messi", img: "https://images.performgroup.com/di/library/GOAL/d0/ef/lionel-messi-alaves-barcelona-laliga-26082017_16xo7b0uco5qf1q7jwbto2606o.jpg" };
	ronaldo = { name: "Ronaldo", img: "https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/10/24/17/ronaldo-2.jpg" };

	players: any[] = [
		this.messi, this.ronaldo
		
	];
	constructor() { }

	list(): any[] {
		return this.players;
	}

	playersByChampionship(championship: any): any[] {
		return this.players;
	}

	getPlayers(): Observable<any[]> {
		return of(this.players);
	}


}
