import { Component } from "@angular/core";
import { Catalogs } from "../services/service.catalogs"

@Component({
  selector: 'show-app',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [Catalogs]
})

export class ShowComponent{
  public showCard = 0;
  constructor(public catalog: Catalogs){
    setTimeout(() => {this.showCard=1}, 1500);
  }


   



}
