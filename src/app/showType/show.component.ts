import { Component } from "@angular/core";
import { Router} from "@angular/router";


@Component({
  selector: 'show-app',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: []
})

export class ShowComponent{
  public showCard = 0;
  constructor(public nav:Router){
    setTimeout(() => {this.showCard=1}, 900);
  }

  goToComedy(){
    this.nav.navigate(["navigate", "comedy"])
  }
  goToRomance(){
    this.nav.navigate(["navigate", "romance"])
  }
  goToAnime(){
    this.nav.navigate(["navigate", "anime"])
  }
  goToTerror(){
    this.nav.navigate(["navigate", "terror"])
  }
  goToAction(){
    this.nav.navigate(["navigate", "action"])
  }






}
