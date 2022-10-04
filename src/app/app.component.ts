import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    platform.ready().then(() => {
      // document.body.setAttribute('color-theme' , 'light');
      if(localStorage.getItem('themeColor') == 'dark'){
        document.body.setAttribute('color-theme' , 'dark');
      }else{
        document.body.setAttribute('color-theme' , 'light');
      }
    });
  }
}
