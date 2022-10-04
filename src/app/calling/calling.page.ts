import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calling',
  templateUrl: './calling.page.html',
  styleUrls: ['./calling.page.scss'],
})
export class CallingPage implements OnInit {

  @Input() value: any;

  volumeValue: string = '';
  videoValue: string = '';
  muteValue: string = '';
  phoneValue: string = '';

  profileInfo: any = {};
  participantsArray: any;
  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private dataservice: DataService) { }

  ngOnInit() {
    // console.table(this.navParams.data.profileInfo);
    this.profileInfo = this.navParams.data.profileInfo;
    this.participantsArray = this.dataservice.participants;
  }
  callingVolOptions(value){
    if(this.volumeValue == ''){
      this.volumeValue = value;
    }else{
      this.volumeValue = '';
    }
  }
  callingVidOptions(value){
    if(this.videoValue == ''){
      this.videoValue = value;
    }else{
      this.videoValue = '';
    }
  }
  callingMuteOptions(value){
    if(this.muteValue == ''){
      this.muteValue = value;
    }else{
      this.muteValue = '';
    }
  }
  callingPhoneOptions(value){
    // if(this.phoneValue == ''){
    //   this.phoneValue = value;
    // }else{
    //   this.phoneValue = '';
    // }
    this.dismissModal();
  }
  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    }).then(() => {});
  }
}
