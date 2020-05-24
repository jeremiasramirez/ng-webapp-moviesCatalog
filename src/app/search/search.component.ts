import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router"
import { Catalogs } from "../services/service.catalogs"
import { delay} from 'rxjs/operators'
import { timer } from 'rxjs';

@Component({
  selector: 'search-app',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.css',
    '../home/home.component.css',
    '../styles/general.css',
    '../onlyMovie/only.component.css'],
  providers: [Catalogs]
})

export class SearchComponent{

  public spinner : any ={
    off:null
  }
  public showCard: number = 1;
  public cards : any;
  public textInput : any = "";
  public showMsj : number;
  public showButtonNavigateBetweenPage:number = 0;
  public onlyId=0;
  public only;
 
  constructor(public router:Router, public param:ActivatedRoute, public catalogs:Catalogs){
    setTimeout(()=>{this.showCard = 0}, 1000);

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

  backPage(){
    // window.history.back()
    this.onlyId=0;
  }

  searchShow(response:any){

    if (response != ""){
      this.spinner.off=true
      this.router.navigate(["search", response])

      this.catalogs.getCatalogs(response).pipe(delay(1000)).subscribe((data:any)=>{
        this.cards = data;


      }, (err)=>{return err}, ()=>{this.spinner.off=false;  })

    }

  }

  goCard(id:any){

    this.onlyId=1;
    this.showCard=1

    timer(1000).subscribe(()=>{
      this.showCard = 0

    });

    this.catalogs.getOnlyShow(id).subscribe((response:any)=>{
      this.only = response;
    })

  }

}
