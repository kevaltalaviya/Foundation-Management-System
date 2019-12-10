import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { from } from 'rxjs';
  @Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  constructor(private http:HttpClient) { }
  submit(body:any)
  {
    return this.http.post('http://localhost:3000/register',body,{
    observe:'body'
    });
  }

adminlogin(body:any)
{
  return this.http.post('http://localhost:4000/adminlogin',body,{
  observe:'body'  
  });
}
auth()
{
  return this.http.get('http://localhost:3000/username',{
    observe:'body',
    params: new HttpParams().append('token',localStorage.getItem('token'))
    });
}
}
