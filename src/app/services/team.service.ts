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

  /** Team list */
  teams: any[];
  
  /** json URL */
	private jsonFileURL: string = "../assets/teams.json";

  /** Team service constructor */
	constructor(private http: Http) {
	}

  /** 
   * Returns the list of teams
   */
	list(): any[] {
		return this.teams;
	}

  /**
   * Return team by championship
   */
	teamsByChampionship(championship: any): any[] {
		return this.teams;
	}

  /**
   * Return an observable with the yeam that matches the id
   */
	getTeamById(id: any): Observable<any> {
		return this.http.get(this.jsonFileURL).map((response: Response) => {
			return <any>response.json()[id - 1]
		}).catch(this.handleError);
	}

  /**
   * Return an observable with the list of teams
   */
	getTeams(): Observable<any> {
		return this.http.get(this.jsonFileURL).map((response: Response) => {
			return <any>response.json()
		}).catch(this.handleError);
	}

  /** Handles the response error */
	private handleError(errorResponse: Response) {
		console.log(errorResponse.statusText);
		return Observable.throw(errorResponse.json().error || "Server error");
	}
}
