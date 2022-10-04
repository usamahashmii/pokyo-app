import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, NavController, PopoverController } from '@ionic/angular';
import { DatePage } from '../date/date.page';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileImage = 'assets/imgs/profession2/user4.jpg';
  showProfileName: boolean = false;

  profileInfo = {
    name: 'Andrew Nelson',
    nickName: 'Andy Mirray',
    userName: 'Andy1301',
    email: 'mirrandy@gmail.com',
    location: 'Ontario Canada'
  };
  dob = "Pick date";
  constructor(private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    private popoverCtrl: PopoverController,
    private alertController: AlertController,
    private toastService: ToasterService) { }

  ngOnInit() {
  }
  async logScrolling(scroll) {
    console.log(scroll);
    if (scroll.detail.scrollTop >= 115) {
      console.log('more than 123');
      this.showProfileName = true;
      if(document.querySelector('.profile-data-wrap-div-header')){
        document.querySelector('.profile-data-wrap-div-header').classList.add('change');
        document.querySelector('.profile-data-wrap-div-header').classList.add('profile-data-wrap-div-header-bottom');
      }
      
    }else{
      console.log('less than 123');
      this.showProfileName = false;
      if(document.querySelector('.profile-data-wrap-div-header')){
        document.querySelector('.profile-data-wrap-div-header').classList.add('change-low');
        document.querySelector('.profile-data-wrap-div-header').classList.remove('profile-data-wrap-div-header-bottom');
      }
    }
  }
  async changeProfilePic() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Pick photo from',
      cssClass: 'profile-pic-action-sheet',
      buttons: [ {
        text: 'Camera',
        handler: () => {
          console.log('Camera');
        }
      },
      {
        text: 'Gallery',
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
  async updateField(value, profileValue) {
    const alert = await this.alertController.create({
      cssClass: 'update-user-info-alert',
      header: 'Edit ' + value,
      inputs: [
        {
          name: value,
          type: 'text',
          value: profileValue,
          placeholder: value
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          role: '',
          handler: (data) => {
            console.log('Confirm Ok' , data);
            if(data.hasOwnProperty('name')){
              this.profileInfo.name = data.name;
            }else if(data.hasOwnProperty("Nickname")){
              this.profileInfo.nickName = data.Nickname;
            }else if(data.hasOwnProperty("Username")){
              this.profileInfo.userName = data.Username;
            }else if(data.hasOwnProperty("Email")){
              this.profileInfo.email = data.Email;
            }else{
              this.profileInfo.location = data.Location;
            }
            // if(data.name == ''){
            //   this.profileInfo.name = 'Enter Name';
            // }else{
            //   this.profileInfo.name = data.name;
            // }
              
          }
        }
      ]
    });
    await alert.present();
  }
  async pickDate(){
    const modal = await this.popoverCtrl.create({
      component: DatePage,
      cssClass: 'date-popover',
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned);
      if (dataReturned !== null && dataReturned.data !== null && dataReturned.data != undefined) {
        this.dob = dataReturned.data;
        this.dob = this.dob.split('T')[0];
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    return await modal.present();
  }
  goBack(){
    this.navCtrl.navigateBack('/home');
  }
  logout(){
    // this.toastService.presentToast('Profile updated successfully');
    this.navCtrl.navigateRoot('/phonenumber');
  }
}
