import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MainBannerComponent } from '../main-banner/main-banner.component';
import { ServicesComponent } from '../../services/services.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    DefaultComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    MainBannerComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
