import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  win: any;
  loss: any;
  constructor(private router: Router, private route: ActivatedRoute, private usersservice: UserserviceService, private productservice: ProductserviceService) {
  }

  getUser() {
    this.usersservice.getUser().subscribe((res: any) => {
      this.user = res;
      this.email = this.user.email;
      console.log(this.user);
      this.getAllInAuctionProducts();
      this.getWinCount(this.email);
      this.getLossCount(this.email);
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

  dashboard(){
    this.router.navigate(["/buyernavbar"]);
  }

  getWinCount(email: any){
    console.log(email);
    this.productservice.getWinCount(email).subscribe((res)=>{
      this.win = res;
    })
  }

  getLossCount(email:any){
    console.log(email);
    this.productservice.getLossCount(email).subscribe((res)=>{
      this.loss = res;
    })
  }


  onDataChange(event: any){
    this.page = event;
    this.getAllInAuctionProducts();
    
  }

  bid(id:any){
    
  }

}
