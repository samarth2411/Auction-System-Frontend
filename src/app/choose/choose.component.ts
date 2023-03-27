import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'sam-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent {
  data:any;
  user:any;
  constructor(private router : Router, private route: ActivatedRoute ,private usersservice : UserserviceService){
  }
getUser(){
  this.usersservice.getUser().subscribe((res: any)=>{
    this.user=res;
    console.log(this.user);


  })}

  logoutUser(){
    this.usersservice.logout().subscribe((res:any)=>{
      if(res){
        this.router.navigate(["/"]);
      }

    })
  }

  dashboard(){
    this.router.navigate(["/sellerDashboard"]);
  }

  ngOnInit(){

    this.getUser();

    // this.route.queryParams.subscribe((params)=>{
    //   console.log(params);
      
    // })
  }

  buydashboard(){
    this.router.navigate(["/buyernavbar"]);
  }

}
