import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule} from "@angular/common/http"
import { CommonModule} from "@angular/common"

import { AppComponent } from './app.component';
import {  HomeComponent } from "./home/home.component"
import {  InitComponent } from "./init/init.component"
import {  SearchComponent } from "./search/search.component"

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
    HttpClientModule,
    routingMovie,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
