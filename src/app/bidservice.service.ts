import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bidder } from './bidder';

@Injectable({
  providedIn: 'root'
})
export class BidserviceService {

  constructor(private http: HttpClient) { }

  addBid(bidder: Bidder){
    return this.http.post('http://localhost:8080/bidder/add' , bidder ,  {withCredentials:true})
  }

  getBidder(productId:number , userId:string){
    return this.http.post('http://localhost:8080/getBidder'+ '/' + productId + '/' + userId , {withCredentials:true})
  }

  updateBid(productId:number , userId:string , currentBid:number){
    return this.http.post('http://localhost:8080/updateCurrentBid'+ '/' + productId + '/' + userId + '/' + currentBid, {withCredentials:true})
  }

  getCount(userId:string){
    return this.http.post('http://localhost:8080/bidder/count'+ '/' + userId , {withCredentials:true})
  }
  

  getBidders(userId:string){
    return this.http.get('http://localhost:8080/bidder/getProducts' + '/' + userId, {withCredentials:true})
  } 
}
