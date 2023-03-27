import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'sam-uploadproduct',
  templateUrl: './uploadproduct.component.html',
  styleUrls: ['./uploadproduct.component.scss']
})
export class UploadproductComponent implements OnInit {

  user:any;
  email!:any;
  product:Product={

  };
  model: any = {}

  constructor(private router: Router, private route: ActivatedRoute, private productservice: ProductserviceService, private usersservice : UserserviceService) {
    
  }

  getUser() {
    this.usersservice.getUser().subscribe((res: any) => {
      this.user = res;
      console.log(this.user);
      this.email = this.user.email;
      console.log(this.email);
      this.product.owner = this.email!;
    })
  }


  ngOnInit(){

    this.getUser();
    
  }

  uploadProduct(){
    this.product.name = this.model.name;
    this.product.description = this.model.description;

    this.product.startTime = new Date(this.model.startTime).getTime();
    this.product.endTime = new Date(this.model.endTime).getTime();

    this.product.price = this.model.price;
    this.product.inAuction = false;
    console.log(this.product);
    if(this.product!=null){
      this.productservice.addProduct(this.product).subscribe((data:any)=>{
        console.log(data);
        this.router.navigate(["/sellerDashboard"])
      })
    }
    else{
      console.log("product is null");
    }
    
  }

}
