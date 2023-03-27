import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { ProductserviceService } from '../productservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'sam-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  page:any;
  counts:number = 0;
  tableSize: number = 2;

  


  count:any;
  auctionCount:any;
  requestCount:any;
  request:any;
  name:any;


  ngOnInit(){
    this.getUserCount();
  }

  constructor(private adminservice: AdminserviceService, private router: Router, private route: ActivatedRoute, private userservice: UserserviceService
    ,private productservice: ProductserviceService) {
  }

  getUserCount(){
    this.adminservice.getAllUsers().subscribe((res:any)=>{
      this.count = res;
      this.getActiveAuctionCount();
      this.getRequestCount();
      this.getRequest();
    })
  }

  getActiveAuctionCount(){
    this.adminservice.getAllActiveProducts().subscribe((res:any)=>{
      this.auctionCount = res;
    })
  }

  getRequestCount(){
    this.adminservice.getRequestCount().subscribe((res:any)=>{
      this.requestCount = res;
    })
  }

  getRequest(){
    this.adminservice.getRequest().subscribe((res:any)=>{
      this.request = res;
      console.log(this.request);
    })
  }

  onDataChange(event: any){
    this.page = event;
    this.getRequest();
  }

  // getName(owner: any):string{
  //   this.userservice.get(owner).subscribe((res:any)=>{
  //     this.name = res.name;
  //   })
  //   return this.name;
  // }

  updateIsRejected(productId:number){
    this.productservice.updateProductIsRejected(productId).subscribe((res:any)=>{
      console.log(res);
      this.getRequest();
      this.getRequestCount();
    })
  }

  updateInAuction(productId:number){
    this.productservice.updateProductInAuction(productId).subscribe((res:any)=>{
      console.log(res);
      this.getRequest();
      this.getRequestCount();
    })
  }

}
