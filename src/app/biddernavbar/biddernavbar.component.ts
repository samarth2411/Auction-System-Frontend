import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'sam-biddernavbar',
  templateUrl: './biddernavbar.component.html',
  styleUrls: ['./biddernavbar.component.scss']
})
export class BiddernavbarComponent implements OnInit {

  user: any;
  constructor(private router: Router, private route: ActivatedRoute, private usersservice: UserserviceService) {
  }

  getUser() {
    this.usersservice.getUser().subscribe((res: any) => {
      this.user = res;
      console.log(this.user);
    })
  }

  logoutUser(){
    this.usersservice.logout().subscribe((res:any)=>{
      if(res){
        this.router.navigate(["/"]);
      }

    })
  }

  uploadProduct(){
    this.router.navigate(["uploadProduct"])
  }
  
  ngOnInit() {
    this.getUser();
  }

  browseAuction(){
    this.router.navigate(["sellerDashboard"]);
  }

}
