import { Component } from "@angular/core";
import { Router } from "@angular/router"


@Component({
  selector: 'init-app',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css'],
  providers: []
})

export class InitComponent{

  //properties
  public sliderRoutes : any[] = ["../assets/poster/posterMovie.jpg"]
  public allRoutesSlider : any[] = []

  constructor(public navigate : Router){
    this.pushBankImage();
    this.sliderInit();


      setTimeout(()=>{
        this.scrollTo();
      },2000)


  }

  resetSlider(){
    this.sliderRoutes.unshift("../assets/poster/posterMovie.jpg");
     
      this.sliderInit();

  }

  // functions
  pushBankImage(){

    return  this.allRoutesSlider = [
        "./assets/poster/poster1.jpeg",
        "./assets/poster/poster2.jpg",
        "./assets/poster/poster3.jpg",
        "./assets/poster/poster4.jpg",
        "./assets/poster/poster5.jpg",
        "./assets/poster/poster6.jpg"
      ]

  }
  sliderInit(){


    let counterSlider :number= 0
    let intervalSlider = setInterval(()=>{

        this.sliderRoutes.unshift(this.allRoutesSlider[counterSlider])

        if (counterSlider == 6 ){
            this.resetSlider();
            clearInterval(intervalSlider);

        }

        counterSlider++;

    },3600)



  }

  scrollTo(){
      let counterInterval: number = 100;
       setTimeout(()=>{

          window.scrollBy(0, counterInterval)

      },100);
  }



  navigateToHome(){
    this.navigate.navigate(["home"]);
  }


}
