import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-generalsettings',
  templateUrl: './generalsettings.page.html',
  styleUrls: ['./generalsettings.page.scss'],
})
export class GeneralsettingsPage implements OnInit {

  enableNightMoodBool: boolean = false;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.callThemeFun();  //Check Theme
  }
  goBack(){
    this.navCtrl.navigateBack('/settings');
  }
  callThemeFun(){
    if(localStorage.getItem('themeColor') == 'dark'){
      this.enableNightMoodBool = true;
    }else{
      this.enableNightMoodBool = false;
    }
  }
  toggleNightMode(event){
    console.log(event);
    if(localStorage.getItem('themeColor') == 'dark'){
      document.body.setAttribute('color-theme' , 'light');
      localStorage.setItem('themeColor', 'light');
    }else{
      document.body.setAttribute('color-theme' , 'dark');
      localStorage.setItem('themeColor', 'dark');
    }
  }
}
