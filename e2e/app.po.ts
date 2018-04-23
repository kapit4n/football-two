import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getDefaultChanpionship() {
    // navigate to default championship
    browser.get('/')
    // return the default championship info(name, description, picture, teams, matches)
    return element(by.css('app-root h1')).getText();
  }
  
  getChampionshipById(id: number) {
    // navigate to championship N
    return browser.get('/championshipById/' + id);
    // get the championship info
    let championshipName = element(by.css('app-championship-by-id name')).getText();
    let championshipDescr = element(by.css('app-championship-by-id name')).getText();
    let championshipBanner = element(by.css('app-championship-by-id banner')).getText();
    // return the info
    return {
      name: championshipName, 
      description: championshipDescr, 
      banner: championshipBanner
    };
  }
}
