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
		this.teamService.getTeamsFromJson().subscribe(response => {
			this.teams = response.teams;
			console.log("TEAMS");
			console.log(this.teams);
		},
			error => this.errorMessage = <any>error);
	}

}
