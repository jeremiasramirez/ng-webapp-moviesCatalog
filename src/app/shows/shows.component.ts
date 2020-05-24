import { Component } from '@angular/core';
import { Catalogs } from '../services/service.catalogs'
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css', '../styles/general.css'],
  providers: [ Catalogs]
})
export class ShowsComponent  {
  public shows : any[];
  public spinner = {
    off:true
  }
  constructor(public allShows:Catalogs) { 
    this.allShows.getAllShows().pipe(delay(500)).subscribe(resp=>{
     // console.log(resp)
      this.shows = resp;
    }, (err)=>{return err}, ()=>{this.spinner.off=false})
  }

 
}
