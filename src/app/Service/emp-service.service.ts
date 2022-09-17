import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeClass } from '../employee-class.model';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  baseURL: string = "https://localhost:7165/";
  constructor(private http: HttpClient) { }
  getEmployeeList(): Observable<any> {
    return this.http.get(this.baseURL + 'api/getEmployeeList')
  }
  postEmployee(empdata:any): Observable<any> {
    debugger;
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(empdata);
    console.log(body)
    return this.http.post(this.baseURL+ 'api/PostEmployee', body,{'headers':headers})
  }
  DeleteEmployee(empdata:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(empdata);
    console.log(body)
    return this.http.post(this.baseURL+ 'api/DeleteEmployee', body,{'headers':headers})
  }
}
