import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Catalogs } from "../services/service.catalogs"


@Component({
  selector: 'only-catalog-type',
  templateUrl: './onlycatalogtype.component.html',
  styleUrls: [
    '../onlyMovie/only.component.css',
    './onlycatalogtype.component.css',
    '../home/home.component.css',
    '../search/search.component.css'
  ],
  providers: [Catalogs]
})


export class OnlyCatalogTypeComponent{
  public cards;
  public onlyId=0;
  public showCard=1;
  public only:any=0;




  constructor(public navRoute:Router, public param:ActivatedRoute, public catalog:Catalogs){
    this.getParams()
    setTimeout(()=>{this.showCard=0}, 900)
  }

  getOnlyType(param__:any = -1){

    if (param__!= -1){

      this.catalog.getCatalogs(param__).subscribe((dataCatalog:any)=>{
        this.cards = dataCatalog;
      })

    }

  }
  getParams(){

      this.param.params.subscribe((paramResponse:any)=>{
          this.getOnlyType(paramResponse.type);
      })


  }

  getOnlyCards(id:any){

    if(id){

      this.catalog.getOnlyShow(id).subscribe((data)=>{
        this.only = data;
      })

    }

  }
  goCard(id:any){

    this.getOnlyCards(id);
    this.onlyId=1;

  }
  resetWindow(){
    this.onlyId=0;
  }

}
