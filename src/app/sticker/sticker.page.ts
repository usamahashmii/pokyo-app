import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.page.html',
  styleUrls: ['./sticker.page.scss'],
})
export class StickerPage implements OnInit {
  stickersCat: string = 'new';
  stickerArrayNew = [
    {name: 'Love kitty',},
  {name: 'Fear kitty'},
  {name: 'Cool kitty'},
  {name: 'Min kitty'},
  {name: 'Angry kitty'},
  {name: 'Formal kitty'},
  {name: 'Friend kitty'},
  {name: 'Wish kitty'},
  {name: 'Fan kitty'},
  {name: 'Fool kitty'},
  {name: 'Sleep kitty'},
  {name: 'Shy kitty'},
  {name: 'Cute kitty'},
  {name: 'Enjoy kitty'},
  {name: 'Star kitty'},
  ];
  stickerArrayTrend = [
  {name: 'Hello kitty',},
  {name: 'Confuse kitty'},
  {name: 'Wish kitty'},
  {name: 'Winter kitty'},
  {name: 'Kiss kitty'},
  {name: 'Laugh kitty'},
  {name: 'Sad kitty'},
  {name: 'Woah kitty'},
  {name: 'Hope kitty'},
  {name: 'Kill kitty'},
  {name: 'Glasses kitty'},
  {name: 'Ok kitty'},
  {name: 'No kitty'},
  {name: 'Thumb kitty'},
  {name: 'Moon kitty'},
  ];
  stickerArrayHot = [
  {name: 'Down kitty',},
  {name: 'Bow kitty'},
  {name: 'Cry kitty'},
  {name: 'Round kitty'},
  {name: 'Hopless kitty'},
  {name: 'Fish kitty'},
  {name: 'Bed kitty'},
  {name: 'Bush kitty'},
  {name: 'Fan kitty'},
  {name: 'Fool kitty'},
  {name: 'Sleep kitty'},
  {name: 'Shy kitty'},
];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.navigateBack('/home');
  }
  segmentChanged(event){
    console.log(event);
    this.stickersCat = event.detail.value
  }
}
