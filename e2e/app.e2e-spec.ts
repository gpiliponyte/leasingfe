import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('leasingfe App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateToLeaseForm();
    expect(page.getParagraphText()).toEqual('Vehicle leasing form');
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
  page.changeLeasePeriod(0.5);//procentais pvz: puse baro 0.5
  page.enterMargin('3.2');
  page.choosePaymentDate(15);
  page.clickNext();
  */
  /*
  *****TEMPLATE FOR EXPECT******
  expect(page.getSummaryConfimationText()).toEqual('Vehicle lease summary :');
  expect(page.getSummaryCustomerTypeValue()).toEqual('Customer type : Private');
  expect(page.getSummaryAssetTypeValue()).toEqual('Asset type : New');
  expect(page.getSummaryBrandValue()).toEqual('Brand : LADA');
  expect(page.getSummaryModelValue()).toEqual('Model : Niva');
  expect(page.getSummaryYearValue()).toEqual('Year : 2008');
  expect(page.getSummaryEnginePowerValue()).toEqual('Engine power (kW) : 500');
  expect(page.getSummaryAssetPriceValue()).toEqual('Asset price (€) : 2000');
  expect(page.getSummaryAdvancePaymentPercentageValue()).toEqual('Advance payment percentage : 20');
  expect(page.getSummaryAdvancePaymentAmountValue()).toEqual('Advance payment amount(€) : 400');
  expect(page.getSummaryLeasePeriodValue()).toEqual('Lease period : 6');//nera dar auto ivedimo
  expect(page.getSummaryMarginValue()).toEqual('Margin (%) : 3');
  expect(page.getSummaryContractFeeValue()).toEqual('Contract fee (€) : 200');
  expect(page.getSummaryPaymentDateValue()).toEqual('Payment date : 15');
  */
  /*****FALSE-TESTS*******/

  /*
   it('shouldnt be able to click next when nothing is filled', () => {
     page.navigateToHome();
     expect(page.getFormNextButton().isEnabled()).toBe(false);
   });
   it('shouldnt be able to click next when only cutomer type is selected', () => {
     page.navigateToHome();
     page.chooseCustomerType('Private');
     expect(page.getFormNextButton().isEnabled()).toBe(false);
   });
   it('shouldnt be able to click next when only first 2 options are selected', () => {
     page.navigateToHome();
     page.chooseCustomerType('Private');
     page.chooseAssetType('New');
     expect(page.getFormNextButton().isEnabled()).toBe(false);
   });
   it('shouldnt be able to click next when only first 3 options are selected', () => {
     page.navigateToHome();
     page.chooseCustomerType('Private');
     page.chooseAssetType('New');
     page.chooseBrand('[value="LADA"]');
     expect(page.getFormNextButton().isEnabled()).toBe(false);
   });
   it('shouldnt be able to click next when only first 4 options are selected', () => {
     page.navigateToHome();
     page.chooseCustomerType('Private');
     page.chooseAssetType('New');
     page.chooseBrand('[value="LADA"]');
     page.chooseModel('[value="Niva"]');
     expect(page.getFormNextButton().isEnabled()).toBe(false);
   });
   it('shouldnt be able to click next when only first 5 options are selected', () => {
     page.navigateToHome();
     page.chooseCustomerType('Private');
     page.chooseAssetType('New');
     page.chooseBrand('[value="LADA"]');
     page.chooseModel('[value="Niva"]');
     page.chooseYear('[value="2008"]');
     expect(page.getFormNextButton().isEnabled()).toBe(false);
   });
   it('shouldnt be able to click next when only first 6 options are selected', () => {
     page.navigateToHome();
     page.chooseCustomerType('Private');
     page.chooseAssetType('New');
     page.chooseBrand('[value="LADA"]');
     page.chooseModel('[value="Niva"]');
     page.chooseYear('[value="2008"]');
     page.enterEnginePower('500');
     expect(page.getFormNextButton().isEnabled()).toBe(false);
   });
   it('shouldnt be able to click next when only first 7 options are selected', () => {
     page.navigateToHome();
     page.chooseCustomerType('Private');
     page.chooseAssetType('New');
     page.chooseBrand('[value="LADA"]');
     page.chooseModel('[value="Niva"]');
     page.chooseYear('[value="2008"]');
     page.enterEnginePower('500');
     page.enterAssetPrice('5000');
     expect(page.getFormNextButton().isEnabled()).toBe(false);
   });
   it('shouldnt be able to click next when only first 8 options are selected', () => {
     page.navigateToHome();
     page.chooseCustomerType('Private');
     page.chooseAssetType('New');
     page.chooseBrand('[value="LADA"]');
     page.chooseModel('[value="Niva"]');
     page.chooseYear('[value="2008"]');
     page.enterEnginePower('500');
     page.enterAssetPrice('5000');
     page.enterAdvancePaymentPercentage('20');
     expect(page.getFormNextButton().isEnabled()).toBe(false);
   });
   it('shouldnt be able to click next when only first 9 options are selected', () => {
     page.navigateToHome();
     page.chooseCustomerType('Private');
     page.chooseAssetType('New');
     page.chooseBrand('[value="LADA"]');
     page.chooseModel('[value="Niva"]');
     page.chooseYear('[value="2008"]');
     page.enterEnginePower('500');
     page.enterAssetPrice('5000');
     page.enterAdvancePaymentPercentage('20');
     page.changeLeasePeriod(0.5);//procentais pvz: puse baro 0.5
     expect(page.getFormNextButton().isEnabled()).toBe(false);
   });
   it('shouldnt be able to click next when only first 10 options are selected', () => {
     page.navigateToHome();
     page.chooseCustomerType('Private');
     page.chooseAssetType('New');
     page.chooseBrand('[value="LADA"]');
     page.chooseModel('[value="Niva"]');
     page.chooseYear('[value="2008"]');
     page.enterEnginePower('500');
     page.enterAssetPrice('5000');
     page.enterAdvancePaymentPercentage('20');
     page.changeLeasePeriod(0.5);//procentais pvz: puse baro 0.5
     page.enterMargin('3.2');
     expect(page.getFormNextButton().isEnabled()).toBe(false);
   });
   it('should get error when entering letters to Engine power', () => {
     page.navigateToHome();
     page.enterEnginePower('ab');
     page.chooseCustomerType('Private');
     expect(page.getFormErrorElement().isEnabled()).toBe(true);
   });
   it('should get error when entering too many numbers after point to Engine power', () => {
     page.navigateToHome();
     page.enterEnginePower('500.222');
     page.chooseCustomerType('Private');
     expect(page.getFormErrorElement().isEnabled()).toBe(true);
   });
   it('should get error when entering letters to Asset price', () => {
     page.navigateToHome();
     page.enterAssetPrice('a');
     page.chooseCustomerType('Private');
     expect(page.getFormErrorElement().isEnabled()).toBe(true);
   });
   it('should get error when entering Asset price that is too low', () => {
     page.navigateToHome();
     page.enterAssetPrice('1000');
     page.chooseCustomerType('Private');
     expect(page.getFormErrorElement().isEnabled()).toBe(true);
   });
   it('should get error when entering too many numbers after point to Asset price', () => {
     page.navigateToHome();
     page.enterAssetPrice('1000.555');
     page.chooseCustomerType('Private');
     expect(page.getFormErrorElement().isEnabled()).toBe(true);
   });
   it('should get error when entering letters to Advance payment percentage', () => {
     page.navigateToHome();
     page.enterAdvancePaymentPercentage('a');
     page.chooseCustomerType('Private');
     expect(page.getFormErrorElement().isEnabled()).toBe(true);
   });
   it('should get error when entering Advance payment percentage that is too low', () => {
     page.navigateToHome();
     page.enterAdvancePaymentPercentage('9');
     page.chooseCustomerType('Private');
     expect(page.getFormErrorElement().isEnabled()).toBe(true);
   });
   it('should get error when entering Advance payment percentage that is too big', () => {
     page.navigateToHome();
     page.enterAdvancePaymentPercentage('101');
     page.chooseCustomerType('Private');
     expect(page.getFormErrorElement().isEnabled()).toBe(true);
   });
   it('should get error when entering too many numbers after point to Advance payment percentage', () => {
     page.navigateToHome();
     page.enterAdvancePaymentPercentage('15.98754554444');
     page.chooseCustomerType('Private');
     expect(page.getFormErrorElement().isEnabled()).toBe(true);
   });
   */


  /*****TRUE-TESTS*******/

  /*
  it('should change brand to LADA and model to ', () => {
    page.navigateToHome();
    page.chooseBrand('[value="LADA"]');
    expect(page.getFormBrandValue()).toEqual('LADA');
  });
  it('should change brand to LINCOLN and model to Navigator', () => {
    page.navigateToHome();
    page.chooseBrand('[value="LINCOLN"]');
    page.chooseModel('[value="Navigator"]');
    expect(page.getFormBrandValue()).toEqual('LINCOLN');
    expect(page.getFormModelValue()).toEqual('Navigator');
  });
  it('should change year to 2006', () => {
    page.navigateToHome();
    page.chooseYear('[value="2006"]');
    expect(page.getFormYearValue()).toEqual('2006');
  });
  it('should get to the vehicle lease summary and display welcome message', () => {
    page.navigateToHome();
    page.chooseCustomerType('Private');
    page.chooseAssetType('New');
    page.chooseBrand('[value="LADA"]');
    page.chooseModel('[value="Niva"]');
    page.chooseYear('[value="2008"]');
    page.enterEnginePower('500');
    page.enterAssetPrice('5000');
    page.enterAdvancePaymentPercentage('20');
    page.changeLeasePeriod(0.5);//procentais pvz: puse baro 0.5
    page.enterMargin('3.2');
    page.choosePaymentDate(15);
    page.clickNext();

    expect(page.getSummaryConfimationText()).toEqual('Vehicle lease summary :');
  });
  */
  it('should see same summary values as entered', () => {
    page.navigateToLeaseForm();
    page.chooseCustomerType('Business');
    page.chooseAssetType('Used');
    page.chooseBrand('[value="BMW"]');
    page.chooseModel('[value="125"]');
    page.chooseYear('[value="2000"]');
    page.enterEnginePower('500');

    page.enterAssetPrice('10000');
    page.enterAdvancePaymentPercentage('20');
    page.changeLeasePeriod(0.5); //procentais pvz: puse baro 0.5
    page.enterMargin('3.2');
    page.choosePaymentDate(30);
    page.clickNext();

    expect(page.getSummaryCustomerTypeValue()).toEqual('Business');
    expect(page.getSummaryAssetTypeValue()).toEqual('Used');
    expect(page.getSummaryBrandValue()).toEqual('BMW');
    expect(page.getSummaryModelValue()).toEqual('125');
    expect(page.getSummaryYearValue()).toEqual('2000');
    expect(page.getSummaryEnginePowerValue()).toEqual('500 kW');
    expect(page.getSummaryAssetPriceValue()).toEqual('10000 €');
    expect(page.getSummaryAdvancePaymentPercentageValue()).toEqual('20 %');
    expect(page.getSummaryAdvancePaymentAmountValue()).toEqual('2000.00 €');
    expect(page.getSummaryLeasePeriodValue()).toEqual('42');
    expect(page.getSummaryContractFeeValue()).toEqual('200 €');
    expect(page.getSummaryPaymentDateValue()).toEqual('30');
  });
});
