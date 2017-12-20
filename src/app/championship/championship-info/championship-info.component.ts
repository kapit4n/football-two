import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../services/championship.service'
import { ParamMap, Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
	selector: 'app-championship-info',
	templateUrl: './championship-info.component.html',
	styleUrls: ['./championship-info.component.css']
})
export class ChampionshipInfoComponent implements OnInit {
	championship: any;
	id: number;
	private sub: any;

	constructor(private championshipService: ChampionshipService, private router: Router, private route: ActivatedRoute) {
		const snapshot: RouterStateSnapshot = router.routerState.snapshot;
		console.log(snapshot);
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			if (this.id > 0)
				this.getChampionship(this.id);
			else
				this.getChampionship(1);
		});
	}

	getChampionship(id: any): void {
		this.championshipService.getChampionshipById(id)
			.subscribe(championship => this.championship = championship);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
