import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getElementsWithTagFormGroupAndInput(){
    return element.all(by.css('div.form-group input'));
  }
  fillForm(){
    this.getElementsWithTagFormGroupAndInput().get(0).click();//0-1
    this.getElementsWithTagFormGroupAndInput().get(2).click();//2-3
    this.chooseBrand();
    this.chooseModel();
    this.chooseYear();
    this.enterEnginePower();
    this.enterAssetPrice();
    this.enterAdvancePaymentPercentage();
    this.enterAdvancePaymentAmount();
    //nera slider testo
    this.enterMargin();
    this.getElementsWithTagFormGroupAndInput().get(12).click();//12-13
  }
  //Form methods
  chooseBrand(){
    var select = element(by.id('brand'));
    select.$('[value="LADA"]').click();
  }
  chooseModel(){
    var select = element(by.id('model'));
    select.$('[value="Niva"]').click();
  }
  chooseYear(){
    var select = element(by.id('year'));
    select.$('[value="2008"]').click();
  }
  enterEnginePower(){
    element(by.id('enginePower')).sendKeys('500');
  }
  enterAssetPrice(){
    element(by.id('assetPrice')).sendKeys('2000');
  }
  enterAdvancePaymentPercentage(){
    element(by.id('advancePaymentPercentage')).sendKeys('20');
  }
  enterAdvancePaymentAmount(){
    element(by.id('advancePaymentAmount')).sendKeys('400');
  }
  enterMargin(){
    element(by.id('margin')).sendKeys('3');
  }
  clickNext(){
    element(by.css('button[name]')).click();
  }

  //Summary methods  
  getSummaryConfimationText(){
    return element(by.css('h3:first-child :first-child')).getText();
  }
  getCustomerType(){
    return element.all(by.css('div p')).get(0).getText();
  }
  getAssetType(){
    return element.all(by.css('div p')).get(1).getText();
  }
  getBrand(){
    return element.all(by.css('div p')).get(2).getText();
  }
  getModel(){
    return element.all(by.css('div p')).get(3).getText();
  }
  getYear(){
    return element.all(by.css('div p')).get(4).getText();
  }
  getEnginePower(){
    return element.all(by.css('div p')).get(5).getText();
  }
  getAssetPrice(){
    return element.all(by.css('div p')).get(6).getText();
  }
  getAdvancePaymentPercentage(){
    return element.all(by.css('div p')).get(7).getText();
  }
  getAdvancePaymentAmount(){
    return element.all(by.css('div p')).get(8).getText();
  }
  getLeasePeriod(){
    return element.all(by.css('div p')).get(9).getText();
  }
  getMargin(){
    return element.all(by.css('div p')).get(10).getText();
  }
  getContractFee(){
    return element.all(by.css('div p')).get(11).getText();
  }
  getPaymentDate(){
    return element.all(by.css('div p')).get(12).getText();
  }
}
