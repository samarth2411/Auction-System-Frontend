import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'sam-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  model : any = {};

  form:any;

  user: Users = new Users();

  constructor(private usersservice : UserserviceService, private router : Router, private route: ActivatedRoute){

    
  }

  ngOnInit(): void {
  }

  saveUser(){

    this.user.name = this.model.name;
    this.user.email  = this.model.email;
    this.user.password  = this.model.password;
    console.log(this.user);
    this.usersservice.addUser(this.user).subscribe((data: any)=>{
        if(data!=null){
          localStorage.setItem('email',data.email);
          this.router.navigate(["/choose"]);
        }
        else{
          alert("Invalid User! Please Register First");
        }
    })
    
  }

}
