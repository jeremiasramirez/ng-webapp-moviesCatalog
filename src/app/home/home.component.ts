import { Component } from "@angular/core";
import { Catalogs } from "../services/service.catalogs"

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Catalogs]
})

export class HomeComponent{


  constructor(public catalog: Catalogs){
    // this.catalog.subscribe((data)=>{
    //   console.log(data)
    // })
  }


}
