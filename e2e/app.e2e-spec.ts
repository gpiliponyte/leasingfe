import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('leasingfe App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Lease Calculator!');
  });
  /*
  *****TEMPLATE FOR FILL FORM******
  page.getElementsWithTagFormGroupAndInput().get(0).click();//0- Private 1- Business 
  page.getElementsWithTagFormGroupAndInput().get(2).click();//2- New 3 - Old
  page.chooseBrand('[value="LADA"]');
  page.chooseModel('[value="Niva"]');
  page.chooseYear('[value="2008"]');
  page.enterEnginePower('500');
  page.enterAssetPrice('5000');
  page.enterAdvancePaymentPercentage('20');
  //page.enterAdvancePaymentAmount('400');
  //nera slider testo
  page.enterMargin('3.2');
  page.getElementsWithTagFormGroupAndInput().get(12).click();//12 - day:15 13 - day:30
  page.clickNext();
  */
  /*
  *****TEMPLATE FOR EXPECT******
  expect(page.getSummaryConfimationText()).toEqual('Vehicle lease summary :');
  expect(page.getCustomerType()).toEqual('Customer type : Private');
  expect(page.getAssetType()).toEqual('Asset type : New');
  expect(page.getBrand()).toEqual('Brand : LADA');
  expect(page.getModel()).toEqual('Model : Niva');
  expect(page.getYear()).toEqual('Year : 2008');
  expect(page.getEnginePower()).toEqual('Engine power (kW) : 500');
  expect(page.getAssetPrice()).toEqual('Asset price (€) : 2000');
  expect(page.getAdvancePaymentPercentage()).toEqual('Advance payment percentage : 20');
  expect(page.getAdvancePaymentAmount()).toEqual('Advance payment amount(€) : 400');
  expect(page.getLeasePeriod()).toEqual('Lease period : 6');//nera dar auto ivedimo
  expect(page.getMargin()).toEqual('Margin (%) : 3');
  expect(page.getContractFee()).toEqual('Contract fee (€) : 200');
  expect(page.getPaymentDate()).toEqual('Payment date : 15');
  */
  it('should get to the vehicle lease summary', () => {
    page.getElementsWithTagFormGroupAndInput().get(0).click();//0- Private 1- Business 
    page.getElementsWithTagFormGroupAndInput().get(2).click();//2- New 3 - Old
    page.chooseBrand('[value="LADA"]');
    page.chooseModel('[value="Niva"]');
    page.chooseYear('[value="2008"]');
    page.enterEnginePower('500');
    page.enterAssetPrice('5000');
    page.enterAdvancePaymentPercentage('20');
    //page.enterAdvancePaymentAmount('400');
    //nera slider testo
    page.enterMargin('3.2');
    page.getElementsWithTagFormGroupAndInput().get(12).click();//12 - day:15 13 - day:30
    page.clickNext();

    expect(page.getSummaryConfimationText()).toEqual('Vehicle lease summary :');
  });
  it('should see customer type be private', () => {
    expect(page.getCustomerType()).toEqual('Customer type : Private');
  });
  it('should see asset type be new', () => {
    expect(page.getAssetType()).toEqual('Asset type : New');
  });
  it('should see brand be LADA', () => {
    expect(page.getBrand()).toEqual('Brand : LADA');
  });
  it('should see model be Niva', () => {
    expect(page.getModel()).toEqual('Model : Niva');
  });
  it('should see year be 2008', () => {
    expect(page.getYear()).toEqual('Year : 2008');
  });
  it('should see engine power be 500', () => {
    expect(page.getEnginePower()).toEqual('Engine power (kW) : 500');
  });
  it('should see asset price the same', () => {
    expect(page.getAssetPrice()).toEqual('Asset price (€) : 5000');
  });
  it('should see Advance payment percentage be 20', () => {
    expect(page.getAdvancePaymentPercentage()).toEqual('Advance payment percentage : 20');
  });
  it('should see Advance payment amount same', () => {
    expect(page.getAdvancePaymentAmount()).toEqual('Advance payment amount(€) : 1000.00');
  });
  it('should see leasing period set be 6', () => {
    expect(page.getLeasePeriod()).toEqual('Lease period : 6');//nera dar auto ivedimo
  });
  it('should see margin be the same', () => {
    expect(page.getMargin()).toEqual('Margin (%) : 3.2');
  });
  it('should see contract fee the same', () => {
    expect(page.getContractFee()).toEqual('Contract fee (€) : 200');
  });
  it('should see payment date the same', () => {
    expect(page.getPaymentDate()).toEqual('Payment date : 15');
  });
});