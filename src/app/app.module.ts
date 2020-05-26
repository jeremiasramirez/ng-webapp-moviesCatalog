import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule} from "@angular/common/http"
import { CommonModule} from "@angular/common"

// component
import { AppComponent } from './app.component';
import {  HomeComponent } from "./home/home.component"
import {  InitComponent } from "./init/init.component"
import {  SearchComponent } from "./search/search.component"
import {  ShowComponent } from "./showType/show.component"
import {  OnlyComponent } from "./onlyMovie/only.component"
import { CutText } from "./pipes/pipe.cutText"
import { OnlyCatalogTypeComponent } from "./onlyCatalogType/onlycatalogtype.component"
import { ListComponent } from './list/list.component';
import { ShowsComponent } from './shows/shows.component';
// routing
import {  routingMovie } from "./app.route";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



// material
import {  MatButtonModule } from "@angular/material/button"
import { MatRippleModule } from "@angular/material/core"
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatListModule } from "@angular/material/list";


@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    InitComponent,
    ShowComponent,
    SearchComponent,
    OnlyComponent,
    CutText,
    OnlyCatalogTypeComponent,
    ShowsComponent,
    ListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routingMovie,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
