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

  public showCard : number = 0;
  constructor(public catalog: Catalogs, public param:ActivatedRoute){

    setTimeout(()=>{this.showCard=1},1000)
    this.param.params.subscribe((response)=>{
      this.getForId(response.id)
    })


  }

  getForId(id:number=0){
    if (id != 0){
      this.catalog.getOnlyShow(id).subscribe((response)=>{
        this.only = response;
        console.log(this.only.name)
      })
    }
  }



}
