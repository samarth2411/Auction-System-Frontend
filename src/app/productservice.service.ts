import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService implements OnInit {

  constructor(private http: HttpClient) { }


  ngOnInit(){
    
  }

  getProduct(email:string){
    return this.http.get('http://localhost:8080/getProducts' + '/' + email, {withCredentials:true});
  }

  addProduct(product:Product): Observable<Object>{
    return this.http.post('http://localhost:8080/product/add', product ,{withCredentials:true})
  }

  getBidders(id:number){
    return this.http.post('http://localhost:8080/bidders' + '/' + id ,{withCredentials:true})
  }

  getProductWithId(productId:number){
    return this.http.post('http://localhost:8080/product' + '/' + productId ,{withCredentials:true})
  }

  updateProductIsRejected(productId:number){
    return this.http.post('http://localhost:8080/updateIsRejected' + '/' + productId ,{withCredentials:true})
  }

  updateProductInAuction(productId:number){
    return this.http.post('http://localhost:8080/updateInAuction' + '/' + productId ,{withCredentials:true})
  }

  getProducts(){
    return this.http.get('http://localhost:8080/inAuctionProducts',{withCredentials:true})
  }

  getWinCount(email:string){
    return this.http.post('http://localhost:8080/totalWins' + '/' + email , {withCredentials:true})
  }

  getLossCount(email:string){
    return this.http.post('http://localhost:8080/totalLoss', + '/' + email , {withCredentials:true})
  }






}
