import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductsPageComponent } from '../../components/products-page/products-page.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
