import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getSchedule(advancePaymentAmount, assetPrice, date, leasePeriod, paymentDate, margin) {
    const calendarInfo = {
    advancePaymentAmount: advancePaymentAmount,
    assetPrice: assetPrice,
    date: date,
    leasePeriod: leasePeriod,
    paymentDate: paymentDate,
    margin: margin
    };

    return this.http
      .post('http://localhost:8080/getCalendar', calendarInfo)
      .toPromise();
  }

  getTotalInterestAmount(scheduleResponse) {
    let total = 0;
    for ( let i = 0; i < scheduleResponse.length; i++) {
      total += scheduleResponse[i].interestAmount;
    }
    return total;
  }

}
