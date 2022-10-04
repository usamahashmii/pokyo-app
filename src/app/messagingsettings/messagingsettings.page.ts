import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-messagingsettings',
  templateUrl: './messagingsettings.page.html',
  styleUrls: ['./messagingsettings.page.scss'],
})
export class MessagingsettingsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.navigateBack('/settings');
  }

}
