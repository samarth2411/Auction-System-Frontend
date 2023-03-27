import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { query } from '@angular/animations';

@Component({
  selector: 'sam-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {}
  getData: any;



  constructor(private usersservice: UserserviceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(){
  }

  loginUser() {
    var email = this.model.email;
    var password = this.model.password;

    if (email == "Admin@gmail.com" && password == "admin123") {
      this.usersservice.validateUser(email, password).subscribe((res: any)=>{
        this.getData = res;
        if(this.getData != null){
          console.log(this.getData);
          this.router.navigate(["/adminPage"]);
        }
        else{
          alert("Invalid User! Please Register First");
        }
      })
    }
    else {

      this.usersservice.validateUser(email, password).subscribe((res: any) => {
        this.getData = res;

        if (this.getData != null) {
          console.log(this.getData);
          // localStorage.setItem('email', this.getData.email);
          this.router.navigate(["/choose"]);
        }
        else {
          alert("Invalid User! Please Register First");
        }


      })
    }

  }

  registerUser() {
    this.router.navigate(["/register"]);
  }

}
