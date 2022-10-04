import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonContent, ModalController, NavController, Platform, PopoverController, PopoverOptions } from '@ionic/angular';
import { CallingPage } from '../calling/calling.page';
import { ImageeditPage } from '../imageedit/imageedit.page';
import { ImagesPage } from '../images/images.page';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.page.html',
  styleUrls: ['./chatbox.page.scss'],
})
export class ChatboxPage implements OnInit {
  @ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent;
  @ViewChild('inputMessage') myInput ;
  
  personChat: any;
  message: string = '';

  private win: any = window;
  imagesPickedArray: Array<any> = [];
  isGroup: boolean = false;

  constructor(private route: ActivatedRoute,
    private platform: Platform,
    private modalCtrl: ModalController,
    private router: Router,
    private modalController: ModalController,
    private navCtrl: NavController) {
      this.ScrollToBottom(30);
    }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.personChat = JSON.parse(params.navigationparams);
      this.isGroup = JSON.parse(params.groups);
    });
  }
  goBack(){
    this.navCtrl.navigateBack('/home');
  }
  ScrollToBottom(speedVal){
    setTimeout(() => {
      this.myContent.scrollToBottom(speedVal);
   }, 10);
  }
  sendMessage(){
    var results =  [
      'https://ae01.alicdn.com/kf/H22b626aebcc34fb587223ed236c46e513/Woman-Vulcanize-Shoes-Casual-Times-Vulcanize-2021-hot-sale-Summer-High-Top-Walking-Flats-Women-s.jpg_Q90.jpg_.webp',
      'https://ae01.alicdn.com/kf/H7afbd1264d054b239402b44f8bf49979M/Woman-Vulcanize-Shoes-Casual-Times-Vulcanize-2021-hot-sale-Summer-High-Top-Walking-Flats-Women-s.jpg_Q90.jpg_.webp',
      'https://ae01.alicdn.com/kf/H22b626aebcc34fb587223ed236c46e513/Woman-Vulcanize-Shoes-Casual-Times-Vulcanize-2021-hot-sale-Summer-High-Top-Walking-Flats-Women-s.jpg_Q90.jpg_.webp'
    ]
    // this.imageEdit(results);
    if(this.message != ''){
      var time = this.getCurrentTime();
      var messageObj = {
        imgs: [],
        msg: this.message,
        name: "",
        profileImg: "",
        readStaus: "unread",
        readStausCount: 0,
        time: time,
        type: "self",
        video: []
        };
      this.personChat.chatting.push(messageObj);
      this.ScrollToBottom(300);
      this.message = '';
      this.myInput.setFocus();
    }
  }
  //Get Current Time 
  getCurrentTime(){
    var date_format = '12'; /* FORMAT CAN BE 12 hour (12) OR 24 hour (24)*/

    var d       = new Date();
    var hour: any    = d.getHours();  /* Returns the hour (from 0-23) */
    var minutes: any     = d.getMinutes();  /* Returns the minutes (from 0-59) */
    var result: any  = hour;
    var ext     = '';
     
    if(date_format == '12'){
        if(hour > 12){
            ext = 'PM';
            hour = (hour - 12);
            result = hour;
    
            if(hour < 10){
                result = "0" + hour;
            }else if(hour == 12){
                hour = "00";
                ext = 'AM';
            }
        }
        else if(hour < 12){
            result = ((hour < 10) ? "0" + hour : hour);
            ext = 'AM';
        }else if(hour == 12){
            ext = 'PM';
        }
    }
     
    if(minutes < 10){
        minutes = "0" + minutes; 
    }
     
    result = result + ":" + minutes + ' ' + ext; 
     return result;
  }
  async imageEdit(images){
    // const popover = await this.modalCtrl.create({
    //   component: ImageeditPage,
    //   componentProps: {images: images},
    // });
    // popover.onDidDismiss().then(data => {
    //   console.log(data);
    //   this.imagesPickedArray = [];
      
    //   var time = this.getCurrentTime();
    //   var messageObj = {
    //     imgs: data.data.images,
    //     msg: data.data.msg,
    //     name: "",
    //     profileImg: "",
    //     readStaus: "unread",
    //     readStausCount: 0,
    //     time: time,
    //     type: "self",
    //     video: []
    //     };
    //   this.personChat.chatting.push(messageObj);
    //   this.ScrollToBottom(300);
    //   this.message = '';
    //   this.myInput.setFocus();

      // const popover = await this.modalCtrl.create({
      //   component: ImageeditPage,
      //   componentProps: {images: images},
      // });
      // popover.onDidDismiss().then(data => {
      //   console.log(data);
      //   this.imagesPickedArray = [];
        
        var time = this.getCurrentTime();
        var messageObj = {
          imgs: this.imagesPickedArray,
          msg: '',
          name: "",
          profileImg: "",
          readStaus: "unread",
          readStausCount: 0,
          time: time,
          type: "self",
          video: []
          };
        this.personChat.chatting.push(messageObj);
        // console.log(this.personChat.chatting);
        this.ScrollToBottom(300);
        this.message = '';
        this.myInput.setFocus();

    // });
    // return await popover.present();
  }
  //Convert File Src
  convertImageFile(ImagePath){
    if(this.platform.is('cordova')){
      // console.log(ImagePath);
      return this.win.Ionic.WebView.convertFileSrc(ImagePath);
    }else{
      return ImagePath
    }
  }
  //Open Images to see all images
  openImages(images){
    console.log('images');
    // const modal = await this.modalController.create({
    //   component: ImagesPage,
    //   componentProps: {
    //     'pictures': JSON.stringify(images),
    //   }
    // });
    // return await modal.present();
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: JSON.stringify(images),
      }
      };
    this.navCtrl.navigateForward('/images' , navigationExtras);
  }
  //Send Calls\
async sendCall(value){
    console.log(value);
    const modal = await this.modalController.create({
      component: CallingPage,
      cssClass: 'send-call-page',
      componentProps: {
        profileInfo: {
          callType: value,
          contactNumber: this.personChat.contactNumber,
          name: this.isGroup ? this.personChat.groupName : this.personChat.name,
          profilePicture:  this.isGroup ? this.personChat.groupImage : this.personChat.profilePicture,
        },
      }
    });
    return await modal.present();
  }
  openGroupDetails(){
    if(this.isGroup){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          navigationparams: JSON.stringify({groupPicture: this.personChat.profilePicture, groupName: this.personChat.groupName}),
        }
      };
      this.navCtrl.navigateForward('/groupdetails', navigationExtras);
    }else{
      let navigationExtras: NavigationExtras = {
        queryParams: {
          navigationparams: JSON.stringify({picture: this.personChat.profilePicture, name: this.personChat.name, contact: this.personChat.contactNumber}),
        }
      };
      this.navCtrl.navigateForward('/userdetails', navigationExtras);
    }
  }
}
