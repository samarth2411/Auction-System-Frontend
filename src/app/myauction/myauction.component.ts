import { Component, OnInit } from '@angular/core';
import { BidserviceService } from '../bidservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'sam-myauction',
  templateUrl: './myauction.component.html',
  styleUrls: ['./myauction.component.scss']
})
export class MyauctionComponent implements OnInit {

  user: any;
  email: any;
  participated: any;
  g! : string[];

  constructor(private bidderservice: BidserviceService, private router: Router, private route: ActivatedRoute, private usersservice: UserserviceService, private productservice: ProductserviceService) {
  }
  
  ngOnInit(){
    this.getUser();
  }

  getUser() {
    this.usersservice.getUser().subscribe((res: any) => {
      this.user = res;
      this.email = this.user.email;
      console.log(this.email);
      console.log(this.user);
      this.getTotalCount();
    })
  }


  dashboard() {
    this.router.navigate(["/buyernavbar"]);
  }


  logoutUser() {
    this.usersservice.logout().subscribe((res: any) => {
      if (res) {
        this.router.navigate(["/"]);
      }
    })
  }

  getTotalCount(){
    this.bidderservice.getBidders(this.email).subscribe((res)=>{
      this.participated = res;
      console.log(this.participated);
    })
  }

}
