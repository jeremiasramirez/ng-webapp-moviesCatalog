import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable()


export class Catalogs {
  public httpUrl : string = "http://api.tvmaze.com/search/shows?q=";
  constructor(public http : HttpClient){

  }

  getCatalogs(name:any= "action"){
    let urlLocal :string= this.httpUrl + name;
    return this.http.get(urlLocal)
  }
  getOnlyShow(id:number=0){

    if ( id != 0 ){
      let urlLocal :string= "http://api.tvmaze.com/shows/" + id;
      return this.http.get(urlLocal)
    }

  }
}
