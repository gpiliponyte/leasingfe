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

  }
  //Form methods
  chooseBrand(brand){
    element(by.id('brand')).$(brand).click();
  }
  chooseModel(model){
    var select = element(by.id('model'));
    select.$(model).click();
  }
  chooseYear(year){
    var select = element(by.id('year'));
    select.$(year).click();
  }
  enterEnginePower(enginePower){
    element(by.id('enginePower')).sendKeys(enginePower);
  }
  enterAssetPrice(assetPrice){
    element(by.id('assetPrice')).sendKeys(assetPrice);
  }
  enterAdvancePaymentPercentage(advancePaymentPercentage){
    element(by.id('advancePaymentPercentage')).clear();
    element(by.id('advancePaymentPercentage')).sendKeys(advancePaymentPercentage);
  }
  enterAdvancePaymentAmount(advancePaymentAmount){
    element(by.id('advancePaymentAmount')).sendKeys(advancePaymentAmount);
  }
  changeLeasePeriod(leasePeriod){
    element(by.css('[ng-reflect-name=leasePeriod]')).getSize()
      .then((sizeObj) => {
        browser.actions().mouseMove(element(by.css('[ng-reflect-name=leasePeriod]')),{x:(sizeObj.width/2),y:0}).click().perform();
    });
  
  }
  enterMargin(margin){
    element(by.id('margin')).clear();
    element(by.id('margin')).sendKeys(margin);
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