import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  chatArray: any;

  chatArrayFiltered: Array<any> = [];
  searchValue: string = '';
  constructor(private dataService: DataService,
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
    this.chatArray = this.dataService.chatsArray;
    //Search Item
    this.dataService.getSearchObservable().subscribe(data => {
        this.searchValue = data;
        this.chatArrayFiltered = this.chatArray.chats;
        // console.log(data)
        if (data) {
          this.chatArrayFiltered = this.chatArrayFiltered.filter(function (ele, i, array) {
            let arrayelement = ele.groupName.toLowerCase()
            return arrayelement.includes(data)
          })
        }
        else {
        }      
    });
  }
    //Visit Chat Box
    visitChatBox(chat){
      console.log('chat');
      let navigationExtras: NavigationExtras = {
        queryParams: {
          navigationparams: JSON.stringify(chat),
          groups: true
        }
      };
      this.navCtrl.navigateForward('/chatbox' , navigationExtras);
    }
  //Ion Content Scroll
  logScrolling(event){
    //set store data for side menu
    this.dataService.setObservable(event);
   }
}
