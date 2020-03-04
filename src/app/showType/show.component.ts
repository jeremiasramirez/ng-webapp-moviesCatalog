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
    setTimeout(() => {this.showCard=1}, 2000);
  }

  goToComedy(){
    setTimeout(()=>{this.nav.navigate(["navigate", "comedy"])},400)
  }
  goToRomance(){
    setTimeout(()=>{this.nav.navigate(["navigate", "romance"])},400)
  }
  goToAnime(){
    setTimeout(()=>{this.nav.navigate(["navigate", "anime"])},400)
  }
  goToTerror(){
    setTimeout(()=>{this.nav.navigate(["navigate", "terror"])},400)
  }
  goToAction(){
    setTimeout(()=>{this.nav.navigate(["navigate", "action"])},400)
  }






}
