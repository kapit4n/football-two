import { Injectable } from '@angular/core';
import {
	Observable,
	Subject
} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import {
	Http,
	Headers,
	RequestOptions,
	Response
} from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeamService {
	teams: any[];
	private jsonFileURL: string = "../assets/teams.json";

	constructor(private http: Http) {
	}

	list(): any[] {
		return this.teams;
	}

	teamsByChampionship(championship: any): any[] {
		return this.teams;
	}

	getTeamById(id: any): Observable<any> {
		return this.http.get(this.jsonFileURL).map((response: Response) => {
			return <any>response.json()[id - 1]
		}).catch(this.handleError);
	}

	getTeams(): Observable<any> {
		return this.http.get(this.jsonFileURL).map((response: Response) => {
			return <any>response.json()
		}).catch(this.handleError);
	}

	private handleError(errorResponse: Response) {
		console.log(errorResponse.statusText);
		return Observable.throw(errorResponse.json().error || "Server error");
	}
}
