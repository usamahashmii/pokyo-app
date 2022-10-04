import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  openSettings(value){
    if(value == 'general-settings'){
      this.navCtrl.navigateForward('/generalsettings');
    }else if(value == 'notification-settings'){
      this.navCtrl.navigateForward('/notificationsettings');
    }else if(value == 'messaging-settings'){
      this.navCtrl.navigateForward('/messagingsettings');
    }else if(value == 'privacy'){
      this.navCtrl.navigateForward('/privacy');
    }else if(value == 'security'){
      this.navCtrl.navigateForward('/security');
    }else if(value == 'apps'){
    this.navCtrl.navigateForward('/apps');
    }
  }
  goBack(){
    this.navCtrl.navigateBack('/home');
  }
}
