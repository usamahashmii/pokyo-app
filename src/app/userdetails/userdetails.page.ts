import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {

  personChat: any;
  sharedMedia: any;
  
  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.personChat = JSON.parse(params.navigationparams);
      console.log(this.personChat);
      this.sharedMedia = this.dataService.shareMedia;
      console.log(this.sharedMedia);
    });
  }
  //Open Images to see all images
  openImages(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: JSON.stringify(this.sharedMedia),
      }
      };
    this.navCtrl.navigateForward('/images' , navigationExtras);
  }
  goBack(){
    this.navCtrl.back();
  }
}
