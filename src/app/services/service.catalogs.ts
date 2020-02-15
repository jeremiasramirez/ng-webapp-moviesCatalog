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
  getCatalogsDrama(name:any= "drama"){

      let urlLocal :string= this.httpUrl + name;
      return this.http.get(urlLocal)

  }
  getOnlyShow(id:number=0){

    if ( id != 0 ){
      let urlLocal :string= "http://api.tvmaze.com/shows/" + id;
      return this.http.get(urlLocal)
    }

  }
  getCatalogsComedy(name:any= "comedy"){

      let urlLocal :string= this.httpUrl + name;
      return this.http.get(urlLocal)

  }
  getCatalogsGirls(name:any= "girls"){

      let urlLocal :string= this.httpUrl + name;
      return this.http.get(urlLocal)

  }
  getCatalogsChild(name:any= "anime"){

      let urlLocal :string= this.httpUrl + name;
      return this.http.get(urlLocal)

  }
  getCatalogsRomance(name:any= "romance"){

      let urlLocal :string= this.httpUrl + name;
      return this.http.get(urlLocal)

  }
}
