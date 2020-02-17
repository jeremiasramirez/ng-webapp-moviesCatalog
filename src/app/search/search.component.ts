import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router"
import { Catalogs } from "../services/service.catalogs"

@Component({
  selector: 'search-app',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../home/home.component.css'],
  providers: [Catalogs]
})

export class SearchComponent{
  public showCard: number = 0;
  public param:Object;
  public textInput : any = "";

  constructor(public router:Router, public param:ActivatedRoute, public catalogs:Catalogs){
    setTimeout(()=>{this.showCard = 1}, 1000);

    this.param.params.subscribe((params)=>{
      this.param = params;



      console.log(this.param)


      if (this.param.result){
        this.textInput = this.param.result
        this.searchShow(this.textInput)
        console.log("esta lleno")
      }
      else{
        console.log("esta vacio")
      }

    })

  }

  redirectToNavigate(){
    this.router.navigate(["navigate"])
  }

  searchShow(response:any){
    console.log(response)
    if (response != ""){
      this.router.navigate(["search", response])

      this.catalogs.getCatalogs(response).subscribe((data)=>{
        console.log(data)
      })

    }

  }

}
