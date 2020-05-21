import { Injectable } from "@angular/core";
import { ajax } from "rxjs/ajax"
import { pluck } from 'rxjs/operators';

@Injectable()


export class Catalogs {
  public httpUrl : string = "http://api.tvmaze.com/search/shows?q=";
  constructor(){

  }

  getCatalogs(name:any= "comedy"){
    let urlLocal :string= this.httpUrl + name;
    return ajax.get(urlLocal).pipe(pluck('response'))
  }

  getOnlyShow(id:number=0){

    if ( id != 0 ){
      let urlLocal :string= "http://api.tvmaze.com/shows/" + id;
      return ajax.get(urlLocal).pipe(pluck('response'))
    }

  }
}
