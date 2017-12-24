import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service'

@Component({
	selector: 'app-team-list',
	templateUrl: './team-list.component.html',
	styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

	constructor(private teamService: TeamService) {
	}

	teams: any;
	errorMessage: string;

	ngOnInit() {
		this.teamService.getTeams().subscribe(response => {
			this.teams = response.teams;
		},
			error => this.errorMessage = <any>error);
	}

}
