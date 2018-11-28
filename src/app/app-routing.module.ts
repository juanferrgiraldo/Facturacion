import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CashUserComponent } from './cash-user/cash-user.component';
import { CashRegisterComponent } from './cash-register/cash-register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: HomeComponent},
  { path: 'caja', component: CashRegisterComponent },
  { path: 'cliente', component: CashUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
