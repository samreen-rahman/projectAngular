import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Login } from './login';
import { LoginStatus } from './LoginStatus';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  register(customer: Customer): Observable<Status> {
    let url = 'http://localhost:8080/register';
    return this.http.post<Status>(url, customer);
  }

  login(login: Login) : Observable<LoginStatus>  {
    let url = 'http://localhost:8080/login';
    return this.http.post<LoginStatus>(url, login);
  }
}
