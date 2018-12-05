import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CashService } from './services/cash.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CashRegisterComponent } from './cash-register/cash-register.component';
import { CashUserComponent } from './cash-user/cash-user.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CashRegisterComponent,
    CashUserComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
