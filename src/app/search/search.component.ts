import { Component } from "@angular/core";

@Component({
  selector: 'search-app',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../home/home.component.css']
})

export class SearchComponent{
  public showCard: number = 0;
  constructor(){
    setTimeout(()=>{this.showCard = 1}, 1000);
  }
}
