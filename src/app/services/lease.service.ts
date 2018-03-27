import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LeaseService {

  constructor(private http: HttpClient) { }


//   getAllLeases() {
//     return this.http.get('https://leasingbe.herokuapp.com/').toPromise();
//   }
//
//
//   @RequestMapping(value = "/addLease", method = RequestMethod.POST)
//   public PostLeasingForm addPost(@Valid @RequestBody LeasingForm leasingForm) {
//   return new PostLeasingForm(service.addNewLease(leasingForm));
// }
//
//
// @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
// public PostLeasingForm updatePost(@Valid @RequestBody LeasingForm leasingForm, @PathVariable("id") String id) {
//   return new PostLeasingForm(service.updateBlogPost(id, leasingForm));
// }
//
//
// @RequestMapping(value = "/deleteLease/{id}", method = RequestMethod.DELETE)
// public void removePost(@PathVariable("id") String id) {
//   service.deleteLeaseForm(id);
// }

}
