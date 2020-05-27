import { Component } from '@angular/core';
import { Catalogs } from '../services/service.catalogs'
import { delay } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css', '../styles/general.css'],
  providers: [ Catalogs]
})
export class ShowsComponent  {
  public shows : any[];
  public lengthShows:any = 'await'
  public startShow:number=0;
  public addFav:any = "Movie"
  public endShow:number=10;
  public switchFav:boolean=false;
  public spinner = {
    off:true
  }

  constructor(public allShows:Catalogs) {

    this.allShows.getAllShows().pipe(delay(500)).subscribe(resp=>{
      this.shows = resp;

    }, (err)=>{return err}, ()=>{this.spinner.off=false; this.lengthShows = (this.shows.length/10)})

  }

  public addFavorite(url:string, name:string){
    this.switchFav = true
    timer(1500).subscribe(()=>{
      this.switchFav = false;
    })
    localStorage.setItem(name, url)
  }
  public nextPage(){


    if (this.endShow < this.shows.length ){

      this.startShow+=10
      this.endShow += 10;


    }


  }

  public backPage(){

    if ( this.startShow > 0 ){


       this.startShow-=10;
       this.endShow -= 10;



    }

  }

}
