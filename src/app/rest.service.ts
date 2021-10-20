import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http :HttpClient) { }
  url:string= "http://localhost:3000/Users";
  getUsers()
  {
    return this.http.get<any>(this.url);
  }
//   deleteUsers(id:number)
// {
//   return this.http.delete<any>(this.url +id)
// }
deleteUsers(id:number)
  {
    console.log(id)
    return this.http.delete(`http://localhost:3000/Users/${id}`)
  }
}
