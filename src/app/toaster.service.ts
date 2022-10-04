import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  toast: any;
  constructor(private toastController: ToastController) { }
  async presentToast(msg) {
    this.toast = await this.toastController.create({
      message: msg,
      duration: 1200,
      cssClass: 'reply-toast'
    });
    return this.toast.present();
    
  }
  async dismissToast(){
    this.toast.dismiss();
  }

}
