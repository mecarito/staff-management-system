import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staffbio } from './staffbio';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  constructor(private http: HttpClient) { }

  staffbiourl = 'http://localhost:3000/staffinfo';

  // getstaffbio(): Observable<Staffbio> {
  //   return  this.http.get<Staffbio>(this.staffbiourl,{responseType: 'json'});
  // }

  addstaff(bios): Observable<Staffbio> {
     return this.http.post<Staffbio>(this.staffbiourl, bios);
  }
}
