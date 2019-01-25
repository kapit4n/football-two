import { Injectable } from '@angular/core';
import { ConfService } from './conf.service';

import {
	Observable
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
	
  /** Championship list*/
  championships: any[];
  
  /** json file URL */
	private jsonFileURL: string = "../assets/championships.json";
	private jsonStandingsURL: string = "../assets/championship_@id_standings.json";
	private jsonMatchesURL: string = "../assets/championship_@id_matches.json";

  /**
   * Championship constructor
   */
	constructor(private http: Http, private confSvc: ConfService) {
	}

  /**
   * Returns the champhionship list
   */
	list(): any[] {
		return this.championships;
	}

  /**
   * Gets the list of championships
   */
	getChampionships(): Observable<any[]> {
		return this.http.get(this.confSvc.championshipsUrl()).map((response: Response) => {
			return <any>response.json().sort((x, y) => x.order - y.order)
		}).catch(this.handleError);
	}

  /**
   * Gets Championship by Id
   */
	getChampionshipById(id: any): Observable<any> {
		return this.http.get(this.confSvc.championshipsUrl()).map((response: Response) => {
			return <any>response.json().find(x => x.id == id);
		}).catch(this.handleError);
	}
	
	/**
   * Gets First Championship by Id
   */
	getChampionshipFirst(): Observable<any> {
		return this.http.get(this.confSvc.championshipsUrl()).map((response: Response) => {
			return <any>response.json().sort((x, y) => y.order - x.order)[0];
		}).catch(this.handleError);
	}

  /**
   * Gets Championship Standings by Championship Id
   */
	getStandingsById(id: any): Observable<any[]> {
		return this.http.get(this.jsonStandingsURL.replace("@id", id)).map((response: Response) => {
			return <any[]>response.json();
		}).catch(this.handleError);
	}

  /**
   * Gets Matches Standings by Championship Id
   */
	getMatchesById(id: any): Observable<any[]> {
		return this.http.get(this.jsonMatchesURL.replace("@id", id)).map((response: Response) => {
			return <any[]>response.json();
		}).catch(this.handleError);
	}



  /** 
   * Handles the response erros
   */
	private handleError(errorResponse: Response) {
		return Observable.throw(errorResponse.json().error || "Server error");
	}
}
