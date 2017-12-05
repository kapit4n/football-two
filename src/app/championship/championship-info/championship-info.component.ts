import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../services/championship.service'

@Component({
	selector: 'app-championship-info',
	templateUrl: './championship-info.component.html',
	styleUrls: ['./championship-info.component.css']
})
export class ChampionshipInfoComponent implements OnInit {
	championship: any;

	constructor(private championshipService: ChampionshipService) {
	}

	ngOnInit() {
		this.getChampionship();
	}

	getChampionship(): void {
		this.championshipService.getChampionshipById(1)
			.subscribe(championship => this.championship = championship);
	}
}
