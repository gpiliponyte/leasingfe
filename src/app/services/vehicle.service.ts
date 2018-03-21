import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VehicleService {

  listPost;

  constructor(private http: HttpClient) { }

 /* createPost(content, author, title) {
    const post = {
      title: title,
      content: content,
      author: author,
      date: 'some date'
    };

    return this.http
    .post('https://gretasblog.herokuapp.com/add', post)
    .toPromise();
  }*/

  getAllVehicleInfo() {
    return this.http
    .get('https://leasingbe.herokuapp.com/vehicles')
    .toPromise();
  }

 /* deletePost(id) {
    return this.http
    .delete('https://gretasblog.herokuapp.com/delete/' + id)
    .toPromise();
  }*/


}
