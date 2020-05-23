import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieCatalogs';

  public menu={
    hidden: false,
    classTop: 'inBottom'
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
