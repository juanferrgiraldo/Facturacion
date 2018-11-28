import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { CashService } from './services/cash.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CashRegisterComponent } from './cash-register/cash-register.component';
import { CashUserComponent } from './cash-user/cash-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CashRegisterComponent,
    CashUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [CashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
