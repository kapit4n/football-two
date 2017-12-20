import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PlayerService {
	messi = {
		id: 1, name: "Messi", icon: "https://pbs.twimg.com/profile_images/3577703021/498a60681bea3b182f9ac73b8070b3ce.jpeg",
		img: "https://images.performgroup.com/di/library/GOAL/d0/ef/lionel-messi-alaves-barcelona-laliga-26082017_16xo7b0uco5qf1q7jwbto2606o.jpg",
		biography: `
Lionel Messi was born, 24 June 1987, in Rosario, Argentina to a working-class family. 
His father was a factory steel worker, and his mother a cleaner. He began playing from an early age, 
and his talent was soon apparent. 
However, at the age of 11, Messi was diagnosed with growth hormone deficiency (GHD).
		`
	};
	ronaldo = {
		id: 2, name: "Ronaldo", icon: "https://pbs.twimg.com/profile_images/587962505693044736/gZU6eBM_.jpg",
		img: "https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/10/24/17/ronaldo-2.jpg",
		biography: `
Cristiano Ronaldo dos Santos Aveiro GOIH, ComM (Portuguese pronunciation: 
[kɾiʃ'tjɐnu ʁoˈnaldu]; born 5 February 1985) is a Portuguese professional 
footballer who plays as a forward for Spanish club Real Madrid and the
Portugal national team. Often considered the best player in the world and widely 
regarded as one of the greatest of all time,[note 1] Ronaldo has five Ballon d'Or 
awards,[note 2] the most for a European player and is tied for most all-time. 
He is the first player in history to win four European Golden Shoes. He has won 
25 trophies in his career, including five league titles, four UEFA Champions League 
titles and one UEFA European Championship. A prolific goalscorer, Ronaldo holds the 
records for most official goals scored in the top five European leagues (373), 
the UEFA Champions League (114), the UEFA European Championship (29) and the FIFA 
Club World Cup (7), as well as the most goals scored in a UEFA Champions League season (17). 
He has scored more than 600 senior career goals for club and country.
		`
	};

	players: any[] = [
		this.messi, this.ronaldo

	];
	constructor() { }

	list(): any[] {
		return this.players;
	}

	getPlayers(): Observable<any[]> {
		return of(this.players);
	}

	playersByChampionship(championship: any): any[] {
		return this.players;
	}

	getPlayerById(id: any): Observable<any> {
		return of(this.players[id - 1]);
	}
}
}
