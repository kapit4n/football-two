import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../services/championship.service'

@Component({
	selector: 'app-championship-info',
	templateUrl: './championship-info.component.html',
	styleUrls: ['./championship-info.component.css']
})
export class ChampionshipInfoComponent implements OnInit {
	matches: any[];
	constructor(private championshipService: ChampionshipService) {
	}

	ngOnInit() {
		this.getChampionships();
	}

	getChampionships(): void {
		this.championshipService.getChampionships()
			.subscribe(matches => this.matches = matches);
	}

}
