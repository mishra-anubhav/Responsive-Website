import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule  } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { BodyComponent } from './landing-page/body/body.component';
import { Body2Component } from './landing-page/body2/body2.component';
import { Body3Component } from './landing-page/body3/body3.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CbodyComponent } from './contact/cbody/cbody.component';
import { BodyfaqComponent } from './contact/bodyfaq/bodyfaq.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    BodyComponent,
    Body2Component,
    Body3Component,
    FooterComponent,
    ContactComponent,
    CbodyComponent,
    BodyfaqComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
