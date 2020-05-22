import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Catalogs } from "../services/service.catalogs"
import { delay } from 'rxjs/operators';
import { timer } from 'rxjs';


@Component({
  selector: 'only-catalog-type',
  templateUrl: './onlycatalogtype.component.html',
  styleUrls: [
    '../onlyMovie/only.component.css',
    './onlycatalogtype.component.css',
    '../home/home.component.css',
    '../search/search.component.css',
    '../styles/general.css'
  ],
  providers: [Catalogs]
})


export class OnlyCatalogTypeComponent{
  public cards;
  public onlyId=0;
  public showCard=1;
  public only:any=0;

  public spinner = {
    off:true
  }


  constructor(public navRoute:Router, public param:ActivatedRoute, public catalog:Catalogs){
    this.getParams()
    setTimeout(()=>{this.showCard=0}, 1000)
  }

  getOnlyType(param__:any = -1){

    if (param__!= -1){

      this.catalog.getCatalogs(param__).pipe(delay(1000)).subscribe((dataCatalog:any)=>{
        this.cards = dataCatalog;
      }, (err)=>{return err}, ()=>{this.spinner.off=false}) 

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

   timer(100).subscribe(()=>{ 
    this.getOnlyCards(id);
    this.onlyId=1;
  })

  }
  resetWindow(){
    this.onlyId=0;
  }

}
