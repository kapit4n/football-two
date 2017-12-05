import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-championship-info',
	templateUrl: './championship-info.component.html',
	styleUrls: ['./championship-info.component.css']
})
export class ChampionshipInfoComponent implements OnInit {
	matches = ["Barcelona vs Madrid", "Atletico vs Celta"];
	constructor() { }

	ngOnInit() {
	}

}
