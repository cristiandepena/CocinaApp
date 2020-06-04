import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
{
  path: '', component: DefaultComponent,
  children: [{
    path: '', component: HomepageComponent
  },
  {
    path: 'register', component: RegisterComponent
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
