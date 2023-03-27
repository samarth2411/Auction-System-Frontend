import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get('http://localhost:8080/employeeCount' , {withCredentials:true});
  }

  getAllActiveProducts(){
    return this.http.get('http://localhost:8080/isActiveProducts' , {withCredentials:true})
  }

  getRequestCount(){
    return this.http.get('http://localhost:8080/product/count' , {withCredentials:true})
  }

  getRequest(){
    return this.http.get('http://localhost:8080/notInAuctionProducts' , {withCredentials:true})
  }
}
