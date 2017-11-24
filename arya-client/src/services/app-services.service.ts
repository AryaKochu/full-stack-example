import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppServicesService {

  constructor(private http: Http) { }
  private baseUrl = 'http://localhost:8080/api/hi';
  
  extractData(res: any) {
    return res;
  }
  
   // call the api 
  fetchData(): Observable<any> {
    // ...using get request
    return this.http.get(this.baseUrl)
    // ...and calling .json() on the response to return data
      .map(this.extractData)
      .catch(
        error => {
          throw error ;
        });
  }
}
