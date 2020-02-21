import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    LoginComponent,
    RegisterComponent,
    MainBannerComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
