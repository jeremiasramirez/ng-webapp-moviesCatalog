import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core"


// components

import { HomeComponent } from "./home/home.component"
import { InitComponent } from "./init/init.component"
import {  SearchComponent } from "./search/search.component"
import {  ShowComponent } from "./showType/show.component"

const ROUTES : Routes = [
  {
    path: "home",
    component: HomeComponent
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


export var routingMovie : ModuleWithProviders = RouterModule.forRoot(ROUTES);
