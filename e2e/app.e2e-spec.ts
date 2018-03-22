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
  it('stupid auto test', () => {
    page.fillForm();
    page.clickNext();
    

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
  });
});
