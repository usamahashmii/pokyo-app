import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  chatArray: any;

  chatArrayFiltered: Array<any> = [];
  searchValue: string = '';

  constructor(private dataService: DataService,
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
    this.chatArray = this.dataService.chatsArray;
    console.log(this.chatArray.chats);
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
          // console.log(this.chatArrayFiltered)
        }
        // console.log(this.chatArrayFiltered)
      
    });
  }
    //Visit Chat Box
    visitChatBox(chat){
      console.log('chat');
      let navigationExtras: NavigationExtras = {
        queryParams: {
          navigationparams: JSON.stringify(chat),
          groups: false
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
