import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service'
import { ParamMap, Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
	selector: 'app-team-info',
	templateUrl: './team-info.component.html',
	styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
	/** Current team*/
  team: any;
  /** Curernt team id*/
	id: number;
  /** subscription reference */
	private sub: any;

  /** 
   * Team Info component constructor
   */
	constructor(private teamService: TeamService, private router: Router, private route: ActivatedRoute) {
		const snapshot: RouterStateSnapshot = router.routerState.snapshot;
	}

  /** Load initial data */
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			if (this.id > 0)
				this.getTeam(this.id);
			else
				this.getTeam(1);
		});
	}

  /** 
   * Get team from TeamService by id
   */
	getTeam(id: any): void {
		this.teamService.getTeamById(id)
			.subscribe(team => {
				this.team = team;
				console.log(this.team);
			});
	}

  /**
   * Unsubscribe from observable
   */
	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
