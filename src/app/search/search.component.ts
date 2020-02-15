import { Component } from "@angular/core";
import { Router } from "@angular/router"

@Component({
  selector: 'search-app',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../home/home.component.css']
})

export class SearchComponent{
  public showCard: number = 0;
  constructor(public router:Router){
    setTimeout(()=>{this.showCard = 1}, 1000);
  }

  redirectToNavigate(){
    this.router.navigate(["navigate"])
  }
}
