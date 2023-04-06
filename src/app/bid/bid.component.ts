import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bidder } from '../bidder';
import { BidserviceService } from '../bidservice.service';
import { ProductserviceService } from '../productservice.service';
import { UserserviceService } from '../userservice.service';
import { ResourceLoader } from '@angular/compiler';
import { interval } from 'rxjs';

@Component({
  selector: 'sam-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {
  today: Date = new Date();
  model: any = {}
  bidder: Bidder = new Bidder();
  dateInLong: any;
  leftTime: any;
  user: any;
  id: any;
  email: any;
  product?: any = {};
  win: any;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [5, 10, 15, 20];
  participated: any;

  constructor(private bidderservice: BidserviceService, private router: Router, private route: ActivatedRoute, private usersservice: UserserviceService, private productservice: ProductserviceService) {
  }

  getUser() {
    this.usersservice.getUser().subscribe((res: any) => {
      this.user = res;
      this.email = this.user.email;
      console.log(this.email);
      console.log(this.user);
      this.getTotalCount();
      this.getWinCount(); 
      this.getProduct();
      this.getBiddersList();
      // this.reload();
    })
  }

  getTotalCount(){
    // console.log(this.user.email);
    this.bidderservice.getCount(this.email).subscribe((res)=>{
      this.participated = res;
      console.log(this.participated);
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.id = JSON.parse(params.data);
      this.getUser();
      
    })
  }

  getProduct() {
    this.productservice.getProductWithId(this.id).subscribe((res) => {
      this.product = res;
      console.log(this.product.active);
      console.log(this.product);
      this.dateInLong = this.today.getTime();
      console.log(this.dateInLong);
      this.leftTime  = this.product.endTime - this.dateInLong;
      console.log(this.leftTime);
      setInterval(() => this.reload(this.product), 1000);
    })
  }

  getWinCount() {
    console.log(this.email);
    this.productservice.getWinCount(this.email).subscribe((res) => {
      this.win = res;
    })
  }

  logoutUser() {
    this.usersservice.logout().subscribe((res: any) => {
      if (res) {
        this.router.navigate(["/"]);
      }
    })
  }


  dashboard() {
    this.router.navigate(["/buyernavbar"]);
  }

  getBiddersList() {
    this.productservice.getBidders(this.id).subscribe((response) => {
      this.POSTS = response;
      console.log("hi");
      console.log(this.POSTS);

    })
  }



  onTableDataChange(event: any) {
    this.page = event;
    this.getBiddersList();
  }

  myauction(){
    this.router.navigate(["/myauction"]);
  }
  addBidder() {
    this.bidder.userId = this.user.email;
    this.bidder.productId = this.id;
    this.bidder.currentBid = this.model.currentBid;
    console.log(this.bidder);

    this.bidderservice.getBidder(this.id, this.user.email).subscribe((res) => {
      if (res == null) {
        this.bidderservice.addBid(this.bidder).subscribe((response) => {
          if (response != null) {
            this.getBiddersList();
          }
          else {
            this.router.navigate(["/bid"]);
          }
        })

      }
      else{
        this.bidderservice.updateBid(this.id,this.user.email,this.model.currentBid).subscribe((response)=>{
          if(response!=null){
            this.getBiddersList();
          }
          else{
            this.router.navigate(["/bid"]);
          }
        })
          
        
      }
    })

  }

  reload(product:any){
    console.log(this.leftTime);
    this.leftTime -= 1000;
    console.log(product.active);
    if(product.active==false && this.leftTime<=0){
      this.getProduct();
    }
  }
  




}
