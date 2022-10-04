import { AfterContentChecked, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import SwiperCore,{ SwiperOptions,Pagination,EffectCube } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import * as Hammer from 'hammerjs';
import { ToasterService } from '../toaster.service';
import { DataService } from '../data.service';

SwiperCore.use([Pagination, EffectCube]);
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatusPage implements AfterContentChecked {
  progressBarValue = 0;
  statusLoaderInterval: any;
  statusReplyDivBool: boolean = false;
  statuses: any;

  reply: string = '';
  @ViewChild('replyInput') myInput ;

  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 'auto',
    pagination: false,
    effect: 'cube',
    cubeEffect: {
      slideShadows: false,
      shadow: false,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  };

  // Data passed in by componentProps
  @Input() status: any;

  name: string = '';
  profilePicture: string = '';

  storiesArray = [
    {
      id: 1,
      name: 'Stuart Little',
      profilePicture: 'assets/imgs/profession/3.jpeg',
      status: 'assets/imgs/status-pic/status-pic-1.avif',
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. '
    },
    {
      id: 2,
      name: 'Joseph Nom',
      profilePicture: 'assets/imgs/profession/2.jpeg',
      status: 'assets/imgs/status-pic/status-pic-2.avif',
      desc: 'Avoid unnecessary movement,Kim Bu-gyeom “The Lunar New Year holiday, the size of Omicron’s fashion is decided… “Please take the lead in refraining from visiting the hometown of public officials. '
    },
    {
      id: 3,
      name: 'Colin Lyn',
      profilePicture: 'assets/imgs/profession/9.jpeg',
      status: 'assets/imgs/status-pic/status-pic-3.avif',
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. '
    },
    {
      id: 4,
      name: 'Stephen Bob',
      profilePicture: 'assets/imgs/profession/10.jpeg',
      status: 'assets/imgs/status-pic/status-pic-4.avif',
      desc: 'In the new year, Mercedes-Benz Korea held a press conference to announce its business plans and strategies for 2022, emphasizing electrification, digital, customer satisfaction and ESG under the theme of \'Power the Future\'. Days held online. '
    }
  ]
  constructor(private modalController: ModalController, private toastService: ToasterService) {
      
    this.startInterval();
    setTimeout(() => {
      // Get a reference to an element.
      var square = document.querySelector('.square');
      var hammer = new Hammer(square);
      hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 0 }); 
      hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL, threshold: 0 }); 
      // hammer.get('tap').set({ direction: Hammer.DIRECTION_ALL, threshold: 0 }); 

      hammer.on('press', (press) => {
        // console.log(press);
        // clearInterval(this.statusLoaderInterval);
        this.ClearAllIntervals();
      });
      hammer.on('pressup', (pressup) => {
        // console.log(pressup);
        this.startInterval();
      });
      hammer.on('panmove', (touchmove) => {
        console.log(touchmove);
        // clearInterval(this.statusLoaderInterval);
        this.ClearAllIntervals();
        // this.dismiss();
      });
      hammer.on('panend', (touchend) => {
        // console.log(touchend);
        this.startInterval();
      });
      ///Swipe to dismiss
      hammer.on('swipeup', (swipeup) => {
        // console.log(swipeup);
        this.dismiss();
      });
      hammer.on('swipedown', (swipedown) => {
        // console.log(swipedown);
        this.dismiss();
      });
    } , 300)
  
  }

  ngAfterContentChecked() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    }).then(() => {
      this.ClearAllIntervals();
      if(this.toastService.toast){
        this.toastService.dismissToast();
      }
    });
  }
  next(){
    this.swiper.swiperRef.slideNext(500);
    this.progressBarValue = 0;
    // clearInterval(this.statusLoaderInterval);
    this.ClearAllIntervals();
    this.startInterval();
  }
  prev(){
    this.swiper.swiperRef.slidePrev(500);
    this.progressBarValue = 0;
  }
  onSlideChange(event) {
    this.progressBarValue = 0;
    if(this.swiper.swiperRef.activeIndex == this.storiesArray.length - 1){
      // this.dismiss();
    }
  }
  startInterval(){
    this.statusLoaderInterval = setInterval(() => {
      this.progressBarValue = this.progressBarValue + 0.004;
      if(this.progressBarValue >= 1){
        if(this.storiesArray.length == 1){
          this.dismiss();
        }else{
          this.progressBarValue = 0;
          this.next();
        }
      }else{
        if(this.swiper.swiperRef.activeIndex == this.storiesArray.length - 1){
          // console.log('swiper');
         if(this.progressBarValue >= 0.9){
          this.dismiss();// dismiss the popover
         }
        }
      }
    } , 10)
  }
  ClearAllIntervals(){
    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  }
  showReplyDiv(){  
    this.statusReplyDivBool = true;
    this.ClearAllIntervals();
      setTimeout(() => {
      console.log('loaded');
      this.myInput.setFocus();
    } , 150);
  }
  hideReplyDiv(){
    if(this.statusReplyDivBool){
      this.statusReplyDivBool = false;
      this.startInterval();
    }    
  }
  //Send Reply
  sendReply(){
    if(this.toastService.toast != undefined && this.toastService.toast){
      this.toastService.dismissToast();  
    }
    if(this.reply != '' && this.reply){
      if(this.statusReplyDivBool){
        this.statusReplyDivBool = false;
        this.startInterval();
      }  
      this.toastService.presentToast('Sending Reply..');
      setTimeout(() => {
        this.toastService.dismissToast();
      }, 1000);
      this.reply = '';
    }
  }
}
