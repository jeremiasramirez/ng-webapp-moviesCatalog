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
  public only : any[] = []


  constructor(public catalog: Catalogs, public param:ActivatedRoute){

    this.param.params.subscribe((response)=>{
      this.getForId(response.id)
    })


  }

  getForId(id:number=0){
    if (id != 0){
      this.catalog.getOnlyShow(id).subscribe((response)=>{
        this.only = response;
      })
    }
  }



}
