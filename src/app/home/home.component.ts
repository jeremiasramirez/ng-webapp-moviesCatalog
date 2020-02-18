import { Component } from "@angular/core";
import { Catalogs } from "../services/service.catalogs"
import { Router } from "@angular/router"


@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Catalogs]
})

export class HomeComponent{

  public actionCard: any[] = []
  public comedyCard :any[] = []
  public showCard : number = 0;

  constructor(public catalog: Catalogs, public router: Router){
    this.actions();
    this.scrollTo();
    setTimeout(()=>{this.showCard = 1}, 500);


  }
  actions(){
    this.catalog.getCatalogs().subscribe((data:any)=>{
        this.actionCard = data;
    })
  }


  scrollTo(){
      let counterInterval: number = 500;
       setTimeout(()=>{

          window.scrollBy(0, counterInterval)

      },100);
  }

  redirectToNavigate(){
    this.router.navigate(["navigate"])
  }

  showCardOnly(id:number=0){
    if (id != 0){
      setTimeout(()=>{this.router.navigate(["home", id])}, 100);
    }


  }




}
