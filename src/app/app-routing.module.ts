import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ProductsPageComponent } from './dashboard/products-page/products-page.component';

const routes: Routes = [
{
  path: '', component: DefaultComponent,
  children: [{
    path: '', component: HomepageComponent
  }]
},
{
    path: '', component: DashboardComponent,
    children: [{
      path: 'products', component: ProductsPageComponent
    }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
