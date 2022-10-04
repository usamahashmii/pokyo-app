import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notificationsettings',
  templateUrl: './notificationsettings.page.html',
  styleUrls: ['./notificationsettings.page.scss'],
})
export class NotificationsettingsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.navigateBack('/settings');
  }
}
