import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core"


// components

import { HomeComponent } from "./home/home.component"
import { InitComponent } from "./init/init.component"


const ROUTES : Routes = [
  {path: "home", component: HomeComponent},
  {
    path: "search",
    component: HomeComponent,
    children: [
      {path: 'comedy', component: HomeComponent}
    ]
},
  {path: '', component: InitComponent}
]


export var routingMovie : ModuleWithProviders = RouterModule.forRoot(ROUTES);
