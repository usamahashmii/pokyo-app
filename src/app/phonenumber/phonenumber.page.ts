import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CountriesPage } from '../countries/countries.page';

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.page.html',
  styleUrls: ['./phonenumber.page.scss'],
})
export class PhonenumberPage implements OnInit {
  countryCode: string = '92';
  applogo = 'assets/imgs/app-logo-light.png';
  constructor(private modalController: ModalController,
    private navCtrl: NavController) { }

  ngOnInit() {
    if(localStorage.getItem('themeColor') == 'dark'){
      document.body.setAttribute('color-theme' , 'dark');
      // this.applogo = 'assets/imgs/app-logo-dark.jpg';
      this.applogo = 'assets/imgs/app-logo-light.png';
    }else{
      document.body.setAttribute('color-theme' , 'light');
      this.applogo = 'assets/imgs/app-logo-light.png';
    }
  }
  async pickCountryCode(){
    const modal = await this.modalController.create({
      component: CountriesPage,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data !== null) {
        this.countryCode = dataReturned.data.number;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  next(){
    this.navCtrl.navigateForward('/info');
  }
}
