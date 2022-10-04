import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  @ViewChild('input') txtInput;
  profileImage: any;
  applogo = 'assets/imgs/app-logo-light.png';
  
  constructor(private navCtrl: NavController,
    private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    if(localStorage.getItem('themeColor') == 'dark'){
      document.body.setAttribute('color-theme' , 'dark');
      // this.applogo = 'assets/imgs/app-logo-dark.jpg';
      this.applogo = 'assets/imgs/app-logo-light.png';
    }else{
      document.body.setAttribute('color-theme' , 'light');
      this.applogo = 'assets/imgs/app-logo-light.png';
    }
    setTimeout(() => {
      this.txtInput.setFocus();
    } , 300);
  }
  async uploadPicture(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Pick photo from',
      cssClass: 'profile-pic-action-sheet',
      buttons: [ {
        text: 'Open camera',
        handler: () => {
          console.log('Camera');
        }
      },
      {
        text: 'Open gallery',
        handler: () => {
          console.log('Gallery');
        }
      }
    ]
    });
    await actionSheet.present();
    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
  back(){
    this.navCtrl.navigateBack('/phonenumber');
  }
  next(){
    this.navCtrl.navigateForward('/home');
  }
}
