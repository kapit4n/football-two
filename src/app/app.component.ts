import { Component } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	events = [];
	opened: boolean;
	championships: string[] = ["Champions League", "Copa del Rey", "Copa Libertadores"]
	teams: string[] = ["Barcelona", "Real Madrid", "River", "Boca"];
	players: string[] = ["Messi", "Cristiano", "Ribery", "James"];
	matches: string[] = ["Barcelona vs Madrid", "River vs Boca"];
}
