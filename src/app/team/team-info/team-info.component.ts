import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service'
import { ParamMap, Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
	selector: 'app-team-info',
	templateUrl: './team-info.component.html',
	styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
	team: any;
	id: number;
	private sub: any;

	constructor(private teamService: TeamService, private router: Router, private route: ActivatedRoute) {
		const snapshot: RouterStateSnapshot = router.routerState.snapshot;
		console.log(snapshot);
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			if (this.id > 0)
				this.getTeam(this.id);
			else
				this.getTeam(1);
		});
	}

	getTeam(id: any): void {
		this.teamService.getTeamById(id)
			.subscribe(team => this.team = team);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
