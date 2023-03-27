import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'sam-view-bidders',
  templateUrl: './view-bidders.component.html',
  styleUrls: ['./view-bidders.component.scss']
})
export class ViewBiddersComponent implements OnInit {

  user:Users = new Users();
  data:any;

  constructor(private router: Router, private route: ActivatedRoute, private productservice: ProductserviceService,private usersservice: UserserviceService){
  }

  ngOnInit(){
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.data = JSON.parse((params['data']));
    })
    this.getUser();
  }

  getUser() {
    this.usersservice.getUser().subscribe((res: any) => {
      this.user = res;
      console.log(this.user.email);
    })
  }

  uploadProduct(){
    this.router.navigate(["uploadProduct"])
  }

  browseAuction(){
    this.router.navigate(["sellerDashboard"]);
  }

  logoutUser(){
    this.usersservice.logout().subscribe((res:any)=>{
      if(res){
        this.router.navigate(["/"]);
      }

    })
  }

}
