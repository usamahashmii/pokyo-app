import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Platform } from '@ionic/angular';

@Component({
  selector: 'app-imageedit',
  templateUrl: './imageedit.page.html',
  styleUrls: ['./imageedit.page.scss'],
})
export class ImageeditPage implements OnInit {
  images: any;
  editImages = [
    {
      img: 'assets/imgs/profession2/2.jpeg'
    },
    {
      img: 'assets/imgs/profession2/9.jpeg'
    },
    {
      img: 'assets/imgs/profession2/10.jpeg'
    },
    {
      img: 'assets/imgs/profession2/5.jpeg'
    },
    {
      img: 'assets/imgs/profession2/2.jpeg'
    },
    {
      img: 'assets/imgs/profession2/9.jpeg'
    },
    {
      img: 'assets/imgs/profession2/10.jpeg'
    },
    {
      img: 'assets/imgs/profession2/5.jpeg'
    },
    {
      img: 'assets/imgs/profession2/2.jpeg'
    },
    {
      img: 'assets/imgs/profession2/9.jpeg'
    },
    {
      img: 'assets/imgs/profession2/10.jpeg'
    },
    {
      img: 'assets/imgs/profession2/5.jpeg'
    }
  ];
  imageSelected: string = '';
  message: string = '';

  private win: any = window;
  constructor(private params: NavParams,
    private platform: Platform,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.images = this.params.get('images');
    this.imageSelected = this.images[0].img;
    console.log(this.images);
  }
  selectImage(img){
    this.imageSelected = img.img;
  }
  sendMessage(){
    this.modalCtrl.dismiss({ msg: this.message,images: this.images });
  }
  convertImageFile(ImagePath){
    if(this.platform.is('cordova')){
      console.log(ImagePath);
      return this.win.Ionic.WebView.convertFileSrc(ImagePath);
    }else{
      return ImagePath
    }
  }
}
