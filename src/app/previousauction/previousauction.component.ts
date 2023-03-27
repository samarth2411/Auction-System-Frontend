import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'sam-previousauction',
  templateUrl: './previousauction.component.html',
  styleUrls: ['./previousauction.component.scss']
})
export class PreviousauctionComponent implements OnInit {

  user: any;
  
  allProducts: any;

  constructor(private router: Router, private route: ActivatedRoute, private productservice: ProductserviceService,private usersservice : UserserviceService) {
  }

  ngOnInit() {
    
    this.getUser();
    
  }

  getUser() {
    this.usersservice.getUser().subscribe((res: any) => {
      this.user = res;
      console.log(this.user.email);
      this.getProducts();


    })
  }

  getProducts(){
    var email = this.user?.email;
    console.log(email);
    this.productservice.getProduct(email).subscribe((res: any)=>{
      this.allProducts = res;
      console.log(this.allProducts);


    })
  }

  viewAuctionMembers(id: any){
    this.router.navigate(["viewBidders"],{
      queryParams:{data:(JSON.stringify(id))}
    });
  }

}
