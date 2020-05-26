import { Routes, RouterModule } from "@angular/router";
// import { ModuleWithProviders } from "@angular/core"


// components

import { HomeComponent } from "./home/home.component"
import { InitComponent } from "./init/init.component"
import {  SearchComponent } from "./search/search.component"
import {  ShowComponent } from "./showType/show.component"
import {  OnlyComponent } from "./onlyMovie/only.component"
import { OnlyCatalogTypeComponent } from "./onlyCatalogType/onlycatalogtype.component"
import { ShowsComponent } from './shows/shows.component';
import { ListComponent } from './list/list.component';

const ROUTES : Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "home/:id",
    component: OnlyComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "search/:result",
    component: SearchComponent
  },
  {
    path: "shows",
    component: ShowsComponent
  },
  {
    path: "navigate",
    component: ShowComponent
  },
  {
    path: "navigate/:type",
    component: OnlyCatalogTypeComponent
  },
  {
    path: "list",
    component: ListComponent
  },
  {
    path: '',
    component: InitComponent
  },
  {
    path: '**',
    component: InitComponent
  }
]


export var routingMovie  = RouterModule.forRoot(ROUTES);
