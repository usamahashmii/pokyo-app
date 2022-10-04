import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  pictures: any;
  selectedImage: string = '';
  slideOpts = [
    { 
      autoplay: false
    }
  ];
  @ViewChild('Slider') slides: IonSlides;
  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pictures = JSON.parse(params.navigationparams);
      console.log(this.pictures);
    });
  }
  slideChanged() {
    this.slides.getActiveIndex().then(val => {
      console.log(val);
      // this.selectedImage = this.images[val].img;
    });
  }
  //View Image
  viewImage(image){
    console.log(image);
    this.selectedImage = image.img;
  }
  //Go Back
  dismiss(){
    this.navCtrl.back();
  }
  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }
}
