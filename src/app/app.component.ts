import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieCatalogs';

  constructor(public router:Router){}
  public menu={
    hidden: false,
    classTop: 'inBottom'
  }
  public redirectToSearch(val:string|number){
    this.menu.hidden=false
    this.router.navigate(["search", val]);
  }

  public redirectToExplore(val:string|number){
    timer(800).subscribe(timing=>{
      this.menu.hidden=false
    })
    this.router.navigate(["navigate", val]);
  }


  public showMenu(){
    if (this.menu.hidden==false){
      this.menu.hidden = true;
      this.menu.classTop = 'inTop'
    }
    else{
      setTimeout(() => {
        this.menu.hidden=false
      }, 90);
      this.menu.classTop = 'inBottom'
    }

  }

}
