import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminavbarComponent } from './adminavbar/adminavbar.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BidComponent } from './bid/bid.component';
import { BiddernavbarComponent } from './biddernavbar/biddernavbar.component';
import { BiddertableComponent } from './biddertable/biddertable.component';
import { BuyernavbarComponent } from './buyernavbar/buyernavbar.component';
import { ChooseComponent } from './choose/choose.component';
import { LoginComponent } from './login/login.component';
import { PreviousauctionComponent } from './previousauction/previousauction.component';
import { RegisterComponent } from './register/register.component';
import { UploadproductComponent } from './uploadproduct/uploadproduct.component';
import { ViewBiddersComponent } from './view-bidders/view-bidders.component';
import { MyauctionComponent } from './myauction/myauction.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full"},
  { path: "register", component: RegisterComponent, pathMatch: "full"},
  { path: "choose", component: ChooseComponent, pathMatch: "full"},
  {path: "sellerDashboard", component: BiddernavbarComponent, pathMatch: "full"},
  { path: "uploadProduct", component: UploadproductComponent,pathMatch: "full"},
  { path: "previousAuction", component: PreviousauctionComponent, pathMatch: "full"},
  {path: "viewBidders", component:ViewBiddersComponent, pathMatch:"full"},
  {path: "bidderTable", component:BiddertableComponent, pathMatch:"full"},
  {path:"adminPage",component:AdminavbarComponent, pathMatch:"full" },
  {path:"adminPanel",component:AdminpanelComponent, pathMatch:"full" },
  {path:"buyernavbar", component:BuyernavbarComponent, pathMatch:"full"},
  {path:"bid", component:BidComponent, pathMatch:"full"},
  {path:"myauction", component:MyauctionComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
