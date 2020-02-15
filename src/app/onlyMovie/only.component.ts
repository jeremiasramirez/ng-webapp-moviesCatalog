import { Component } from "@angular/core";
import { Catalogs } from "../services/service.catalogs"
import { ActivatedRoute } from "@angular/router"


@Component({
  selector: 'only-app',
  templateUrl: './only.component.html',
  styleUrls: ['./only.component.css'],
  providers: [Catalogs]
})

export class OnlyComponent{

  constructor(public catalog: Catalogs, public param:ActivatedRoute){
    this.param.params.subscribe((data)=>{
      console.log(data)
    })
  }



}
