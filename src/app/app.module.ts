import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"



import { AppComponent } from './app.component';
import {  HomeComponent } from "./home/home.component"
import {  InitComponent } from "./init/init.component"


import {  routingMovie } from "./app.route"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routingMovie

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
