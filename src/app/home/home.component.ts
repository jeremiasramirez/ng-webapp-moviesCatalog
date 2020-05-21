import { Component } from "@angular/core";
import { Catalogs } from "../services/service.catalogs"
import { Router } from "@angular/router"
import { delay } from 'rxjs/operators';


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
    setTimeout(()=>{this.showCard = 1}, 1000);


  }
  actions(){
    this.catalog.getCatalogs("romance").pipe(delay(1000)).subscribe((data:any)=>{
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
    setTimeout(() => {
      this.router.navigate(["navigate"])
    }, 500);

  }

  showCardOnly(id:number=0){
    if (id != 0){
      setTimeout(()=>{this.router.navigate(["home", id])}, 100);
    }


  }




}
