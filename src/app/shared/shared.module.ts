import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';



@NgModule({
  declarations: [
    MainNavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainNavbarComponent,
    FooterComponent,
    LoginComponent
  ]
})
export class SharedModule { }
