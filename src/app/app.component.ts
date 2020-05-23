import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieCatalogs';

  public menu={
    hidden: false
  }

  public showMenu(){
    if (this.menu.hidden==false){
      this.menu.hidden = true;
    }
    else{
      this.menu.hidden=false
    }

  }

}
