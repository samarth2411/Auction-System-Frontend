import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'sam-biddertable',
  templateUrl: './biddertable.component.html',
  styleUrls: ['./biddertable.component.scss']
})
export class BiddertableComponent implements OnInit {

  title='pagination';
  POSTS: any;
  page: number = 1;
  count:number = 0;
  tableSize: number = 10;
  tableSizes: any = [5,10,15,20];

  product:Product = new Product();


  constructor(private router: Router, private route: ActivatedRoute, private productservice: ProductserviceService,private usersservice: UserserviceService){
  }

  getBiddersList(){
    console.log(this.parentData);
    this.productservice.getBidders(this.parentData).subscribe((response)=>{
      this.POSTS = response;
      console.log("hi");
      console.log(this.POSTS);

    })
  }

  onTableDataChange(event: any){
    this.page = event;
    this.getBiddersList();
  }

  onTableSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.getBiddersList();
  }



  ngOnInit(){
    this.getProduct();

  }

  @Input() public parentData:any;

  getProduct(){
    this.productservice.getProductWithId(this.parentData).subscribe((res: any)=>{
      this.product = res;
      console.log(this.product);
      this.getBiddersList();
    })
    
  }




}
