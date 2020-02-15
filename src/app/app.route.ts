import { Routes, RouterModule } from "@angular/router";
// import { ModuleWithProviders } from "@angular/core"


// components

import { HomeComponent } from "./home/home.component"
import { InitComponent } from "./init/init.component"
import {  SearchComponent } from "./search/search.component"
import {  ShowComponent } from "./showType/show.component"
import {  OnlyComponent } from "./onlyMovie/only.component"


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
    path: "navigate",
    component: ShowComponent
  },
  {
    path: "navigate/:type",
    component: ShowComponent
  },
  {
    path: '',
    component: InitComponent
  }
]


export var routingMovie  = RouterModule.forRoot(ROUTES);
