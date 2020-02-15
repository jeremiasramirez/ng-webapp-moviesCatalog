import { Component } from "@angular/core";
import { Catalogs } from "../services/service.catalogs"

@Component({
  selector: 'show-app',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [Catalogs]
})

export class ShowComponent{

  constructor(public catalog: Catalogs){

  }




}
