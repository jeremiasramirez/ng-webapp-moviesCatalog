import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router"
import { Catalogs } from "../services/service.catalogs"

@Component({
  selector: 'search-app',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../home/home.component.css'],
  providers: [Catalogs]
})

export class SearchComponent{


  public showCard: number = 1;
  public cards : Object;
  public textInput : any = "";
  public showMsj : number;
  public showButtonNavigateBetweenPage:number = 0;
 
  constructor(public router:Router, public param:ActivatedRoute, public catalogs:Catalogs){
    setTimeout(()=>{this.showCard = 0}, 2000);

    this.param.params.subscribe((params:any)=>{
      let param_ = params.result;

      if (param_){

        this.searchShow(param_)
        this.textInput = param_
        this.showButtonNavigateBetweenPage=1;
        this.showMsj=1;
      }


    })

  }

  redirectToNavigate(){
    this.router.navigate(["navigate"])
  }

  searchShow(response:any){

    if (response != ""){
      this.router.navigate(["search", response])

      this.catalogs.getCatalogs(response).subscribe((data:any)=>{
        this.cards = data;
      })

    }

  }

}
