import { Injectable } from '@angular/core';

@Injectable()
export class ConfService {

  championship: any: 
  constructor() {
    this.championship = {
      displayStandings: true,
      displayMatches: true,
      displayNews: true
    }
  }

}
