import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Catalogs } from "../services/service.catalogs"


@Component({
  selector: 'only-catalog-type',
  templateUrl: './onlycatalogtype.component.html',
  styleUrls: ['./onlycatalogtype.component.css'],
  providers: [Catalogs]
})


export class OnlyCatalogTypeComponent{

  constructor(public navRoute:Router, public param:ActivatedRoute, public catalog:Catalogs){
    this.getParams()
  }

  getOnlyType(param__:any = -1){

    if (param__!= -1){

      this.catalog.getCatalogs(param__).subscribe((dataCatalog:any)=>{
        console.log(dataCatalog)
      })

    }

  }
  getParams(){

      this.param.params.subscribe((paramResponse:any)=>{
          this.getOnlyType(paramResponse.type);
      })


  }


}
