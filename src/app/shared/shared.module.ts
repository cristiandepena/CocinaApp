import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';



@NgModule({
  declarations: [
    MainNavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainNavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardNavComponent
  ]
})
export class SharedModule { }
