import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterNavbarComponent } from './login-register-navbar/login-register-navbar.component';
import { ChooseComponent } from './choose/choose.component';
import { FormsModule } from '@angular/forms';
import { BiddernavbarComponent } from './biddernavbar/biddernavbar.component';
import { PreviousauctionComponent } from './previousauction/previousauction.component';
import { UploadproductComponent } from './uploadproduct/uploadproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewBiddersComponent } from './view-bidders/view-bidders.component';
import { BiddertableComponent } from './biddertable/biddertable.component';
import { AdminavbarComponent } from './adminavbar/adminavbar.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BuyernavbarComponent } from './buyernavbar/buyernavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginRegisterNavbarComponent,
    ChooseComponent,
    BiddernavbarComponent,
    PreviousauctionComponent,
    UploadproductComponent,
    ViewBiddersComponent,
    BiddertableComponent,
    AdminavbarComponent,
    AdminpanelComponent,
    BuyernavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
