import { Component } from "@angular/core";
import { Router } from "@angular/router"


@Component({
  selector: 'init-app',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css'],
  providers: []
})

export class InitComponent{


  constructor(public navigate : Router){

    setTimeout(()=>{
      this.scrollTo();
    },2000)



  }

  scrollTo(){
      let counterInterval: number = 200;
      let intervalScroll = setInterval(()=>{
          counterInterval -= 5;

          window.scrollBy(0, counterInterval)
         
          if (counterInterval === 0){
            clearInterval(intervalScroll);
          }
      },100);
  }
  navigateToHome(){
    this.navigate.navigate(["home"]);
  }

}
