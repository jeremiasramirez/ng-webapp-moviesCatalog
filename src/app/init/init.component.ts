import { Component } from "@angular/core";


@Component({
  selector: 'init-app',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css'],
  providers: []
})

export class InitComponent{


  constructor(){
    
    console.log("init")
  }


}
