import { Component } from "@angular/core";


@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})

export class HomeComponent{


  constructor(){
     
    console.log("home")
  }


}
