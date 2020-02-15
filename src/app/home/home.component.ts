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

    setTimeout(()=>{this.showCard = 1}, 1000);


  }
  actions(){
    this.catalog.getCatalogs().subscribe((data:any)=>{
        this.actionCard = data;
        console.log(this.actionCard)
    })
  }

  showCardOnly(id:number=0){
    if (id != 0){
      setTimeout(()=>{this.router.navigate(["home", id])}, 100);
    }

  }




}
