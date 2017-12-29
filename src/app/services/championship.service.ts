import { Injectable } from '@angular/core';
import { MockChampionship } from '../mock/mock-championship';
import { TeamService } from '../services/team.service'

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
export class ChampionshipService {
	championships: any[];

	private jsonFileURL: string = "../assets/championships.json";

	constructor(private http: Http) {
	}

	list(): any[] {
		return this.championships;
	}

	getChampionships(): Observable<any[]> {
		return this.http.get(this.jsonFileURL).map((response: Response) => {
			return <any>response.json()
		}).catch(this.handleError);
	}

	getChampionshipById(id: any): Observable<any> {
		return this.http.get(this.jsonFileURL).map((response: Response) => {
			return <any>response.json()[id - 1];
		}).catch(this.handleError);

	}

	private handleError(errorResponse: Response) {
		return Observable.throw(errorResponse.json().error || "Server error");
	}

}
