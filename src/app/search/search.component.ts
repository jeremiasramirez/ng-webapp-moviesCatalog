import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'search-app',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../home/home.component.css']
})

export class SearchComponent{
  public showCard: number = 0;
  public existParam :number= 0;



  constructor(public router:Router, public param:ActivatedRoute){
    setTimeout(()=>{this.showCard = 1}, 1000);

    this.param.params.subscribe((params)=>{
      if (!(params === {})){
          this.existParam=1;
          console.log(params)
      }

    })

  }

  redirectToNavigate(){
    this.router.navigate(["navigate"])
  }
}
