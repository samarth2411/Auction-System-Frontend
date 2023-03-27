import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }


  validateUser(email: string, password: string) {
    return this.http.get('http://localhost:8080/employee/validate' + '/' + email + '/' + password, {withCredentials:true});
  }

  addUser(user: Users): Observable<Object> {
    return this.http.post('http://localhost:8080/employee/add', user ,{withCredentials:true});
  }

  getUser() {
    return this.http.get('http://localhost:8080/getUser' , {withCredentials:true});
  }

  logout(){
    return this.http.get('http://localhost:8080/logout' , {withCredentials:true});
  }

  get(email:string){
    return this.http.post('http://localhost:8080/employee/get' + '/' + email , {withCredentials:true});
  }

  
}


