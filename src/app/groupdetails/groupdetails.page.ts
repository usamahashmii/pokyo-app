import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-groupdetails',
  templateUrl: './groupdetails.page.html',
  styleUrls: ['./groupdetails.page.scss'],
})
export class GroupdetailsPage implements OnInit {

  shareMedia: any;
  personChat: any;
  segmentSelected: string = 'persons';
  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.personChat = JSON.parse(params.navigationparams);
      console.log(this.personChat);
      this.shareMedia = this.dataService.shareMedia;
    });
  }
  segmentChanged(event){
    console.log(event);
    this.segmentSelected = event.detail.value;
  }
  //Open Images to see all images
  openImages(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        navigationparams: JSON.stringify(this.shareMedia),
      }
      };
    this.navCtrl.navigateForward('/images' , navigationExtras);
  }
  goBack(){
    this.navCtrl.back();
  }
}
