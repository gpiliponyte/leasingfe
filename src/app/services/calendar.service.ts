import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CalendarService {

  constructor(private http: HttpClient) {}

  getCalendarByUniqueId(id: string) {
    return this.http
      .get('https://leasingbe.herokuapp.com/calendarByUniqueId/' + id)
      .toPromise();
  }
}
