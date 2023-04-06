import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BidserviceService } from '../bidservice.service';
import { ProductserviceService } from '../productservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'sam-buyernavbar',
  templateUrl: './buyernavbar.component.html',
  styleUrls: ['./buyernavbar.component.scss']
})
export class BuyernavbarComponent implements OnInit {

  allInAuctionProducts: any;

  ngOnInit(){
    this.getUser();
  }

  page:any;
  counts:number = 0;
  tableSize: number = 2;

  user: any;
  email: any;
  won: any;
  participated: any;
  constructor(private bidderservice: BidserviceService ,private router: Router, private route: ActivatedRoute, private usersservice: UserserviceService, private productservice: ProductserviceService) {
  }

  getUser() {
    this.usersservice.getUser().subscribe((res: any) => {
      this.user = res;
      this.email = this.user.email;
      console.log(this.user);
      this.getAllInAuctionProducts();
      this.getWinCount();
      this.getTotalCount();
    })
  }

  logoutUser(){
    this.usersservice.logout().subscribe((res:any)=>{
      if(res){
        this.router.navigate(["/"]);
      }

    })
  }

  getAllInAuctionProducts(){
    this.productservice.getProducts().subscribe((res)=>{
      this.allInAuctionProducts = res;
      console.log(this.allInAuctionProducts);

    })
  }

  myauction(){
    this.router.navigate(["/myauction"]);
  }


 

  getWinCount(){
    console.log(this.email);
    this.productservice.getWinCount(this.email).subscribe((res)=>{
      this.won = res;
    })
  }

  // getLossCount(email:any){
  //   console.log(email);
  //   this.productservice.getLossCount(email).subscribe((res)=>{
  //     this.loss = res;
  //   })
  // }


  onDataChange(event: any){
    this.page = event;
    this.getAllInAuctionProducts();
    
  }

  bid(id:any){
    this.router.navigate(["/bid"],{
      queryParams:{data:JSON.stringify(id)}
    })

  }

  getTotalCount(){
    this.bidderservice.getCount(this.email).subscribe((res)=>{
      this.participated = res;
      console.log(this.participated);
    })
  }

}
