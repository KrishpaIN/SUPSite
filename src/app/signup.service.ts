import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  postInvitation(name, email): Observable<any>{
    const url = `https://sup-program.azurewebsites.net/api/signup/`;
    var body = {
      name:name,
      email:email
    }
    return this.httpClient.post<any>(url,  body);
  }
}
