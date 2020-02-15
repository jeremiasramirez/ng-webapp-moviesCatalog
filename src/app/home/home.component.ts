import { Component } from "@angular/core";
import { Catalogs } from "../services/service.catalogs"

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


  constructor(public catalog: Catalogs){
    this.actions();

    setTimeout(()=>{this.showCard = 1}, 1000);


  }
  actions(){
    this.catalog.getCatalogs().subscribe((data:any)=>{
        this.actionCard = data;
        console.log(this.actionCard)
    })
  }




}
