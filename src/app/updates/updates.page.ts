import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
import { StatusPage } from '../status/status.page';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.page.html',
  styleUrls: ['./updates.page.scss'],
})
export class UpdatesPage implements OnInit {

  chatArray: any;

  chatArrayFiltered: Array<any> = [];
  searchValue: string = '';
  constructor(private dataService: DataService,
    private modalController: ModalController,) { }

  ngOnInit() {
    this.chatArray = this.dataService.chatsArray;
    //Search Item
    this.dataService.getSearchObservable().subscribe(data => {
        this.searchValue = data;
        this.chatArrayFiltered = this.chatArray.chats;
        // console.log(data)
        if (data) {
          this.chatArrayFiltered = this.chatArrayFiltered.filter(function (ele, i, array) {
            let arrayelement = ele.name.toLowerCase()
            return arrayelement.includes(data)
          })
        }
        else {
        }      
    });
  }
  async openStatus(status){
    console.log('status');
    const modal = await this.modalController.create({
      component: StatusPage,
      cssClass: 'status-page',
      componentProps: {
        'status': status,
      }
    });
    return await modal.present();
  }
  //Ion Content Scroll
  logScrolling(event){
    //set store data for side menu
    this.dataService.setObservable(event);
    }
}
