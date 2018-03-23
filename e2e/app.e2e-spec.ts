import { AppPage } from './app.po';

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
  page.chooseCustomerType('Private'); 
  page.chooseAssetType('New');
  page.chooseBrand('[value="LADA"]');
  page.chooseModel('[value="Niva"]');
  page.chooseYear('[value="2008"]');
  page.enterEnginePower('500');
  page.enterAssetPrice('5000');
  page.enterAdvancePaymentPercentage('20');
  page.changeLeasePeriod(2);//sliderioIlgis/ tai kas ivesta skliausteliuose
  page.enterMargin('3.2');
  page.choosePaymentDate(15);
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
  it('shouldnt be able to click next when nothing is filled', () => {
    page.navigateTo();
    expect(page.getFormNextButton().isEnabled()).toBe(false);
  });
  it('shouldnt be able to click next when only cutomer type is selected', () => {
    page.navigateTo();
    page.chooseCustomerType('Private');//0- Private 1- Business
    expect(page.getFormNextButton().isEnabled()).toBe(false);
  });
  it('should get to the vehicle lease summary and display welcome message', () => {
    page.navigateTo();
    page.chooseCustomerType('Private');//0- Private 1- Business 
    page.chooseAssetType('New');//2- New 3 - Used
    page.chooseBrand('[value="LADA"]');
    page.chooseModel('[value="Niva"]');
    page.chooseYear('[value="2008"]');
    page.enterEnginePower('500');
    page.enterAssetPrice('5000');
    page.enterAdvancePaymentPercentage('20');
    page.changeLeasePeriod(2);//sliderioIlgis/ tai kas ivesta skliausteliuose
    page.enterMargin('3.2');
    page.choosePaymentDate(15);
    page.clickNext();

    expect(page.getSummaryConfimationText()).toEqual('Vehicle lease summary :');
  });
  it('should see same summary values as entered', () => {
    page.navigateTo();
    page.chooseCustomerType('Business');//0- Private 1- Business 
    page.chooseAssetType('Used');//2- New 3 - Used
    page.chooseBrand('[value="BMW"]');
    page.chooseModel('[value="125"]');
    page.chooseYear('[value="2000"]');
    page.enterEnginePower('500');
    page.enterAssetPrice('5000');
    page.enterAdvancePaymentPercentage('20');
    page.changeLeasePeriod(2);//sliderioIlgis/ tai kas ivesta skliausteliuose
    page.enterMargin('3.2');
    page.choosePaymentDate(30);
    page.clickNext();

    expect(page.getCustomerType()).toEqual('Customer type : Business');
    expect(page.getAssetType()).toEqual('Asset type : Used');
    expect(page.getBrand()).toEqual('Brand : BMW');
    expect(page.getModel()).toEqual('Model : 125');
    expect(page.getYear()).toEqual('Year : 2000');
    expect(page.getEnginePower()).toEqual('Engine power (kW) : 500');
    expect(page.getAssetPrice()).toEqual('Asset price (€) : 5000');
    expect(page.getAdvancePaymentPercentage()).toEqual('Advance payment percentage : 20');
    expect(page.getAdvancePaymentAmount()).toEqual('Advance payment amount(€) : 1000.00');
    expect(page.getLeasePeriod()).toEqual('Lease period : 42');//nera dar auto ivedimo
    expect(page.getMargin()).toEqual('Margin (%) : 3.2');
    expect(page.getContractFee()).toEqual('Contract fee (€) : 200');
    expect(page.getPaymentDate()).toEqual('Payment date : 30');
  });
});