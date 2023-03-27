import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'sam-adminavbar',
  templateUrl: './adminavbar.component.html',
  styleUrls: ['./adminavbar.component.scss']
})
export class AdminavbarComponent implements OnInit {

  user: any;

  constructor(private router: Router, private route: ActivatedRoute, private usersservice: UserserviceService) {
  }

  ngOnInit(){
    this.getUser();
    
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

}
