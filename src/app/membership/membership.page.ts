import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss'],
})
export class MembershipPage implements OnInit {

  creditsCount = 300;
  constructor(private navCtrl: NavController,
    private toastService: ToasterService) { }

  ngOnInit() {
  }
  pickCredits(value){
    this.creditsCount = value;
  }
  goBack(){
    this.navCtrl.navigateBack('/home');
  }
  buyCredits(){
    this.toastService.presentToast(this.creditsCount + ' Credits added in your balance');
    this.goBack();
  }
}
