import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomepageComponent } from '../../components/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { MainBannerComponent } from '../../components/main-banner/main-banner.component';
import { ServicesComponent } from '../../services/services.component';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from '../../components/register/register.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    MainBannerComponent,
    ServicesComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
