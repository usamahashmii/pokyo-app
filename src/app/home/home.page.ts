import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonSelect, ModalController, NavController } from '@ionic/angular';
import { CallsPage } from '../calls/calls.page';
import { ChatsPage } from '../chats/chats.page';
import { DataService } from '../data.service';
import { GroupsPage } from '../groups/groups.page';
import { StatusPage } from '../status/status.page';
import { UpdatesPage } from '../updates/updates.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild('inputMessage') myInput ;
  //More Options
  @ViewChild('sectionSelect', { static: false }) sectionSelect: IonSelect;

  chatArray: any;
  status = 'online';
  segmentSelected: string = 'chats';
  statuses: any;
  searchValue: string = '';

  callsPage = CallsPage;
  groupsPage = GroupsPage;
  statusPage = UpdatesPage;
  chatsPage = ChatsPage;

  private lastY = 0;

  applogo = 'assets/imgs/app-logo-light.png';
  constructor(private dataService: DataService,
    private router: Router,
    private modalController: ModalController,
    private navCtrl: NavController) {

      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches(".dropbtn")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };
  }
  showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  ngOnInit(){
    this.closeDropDown();
    this.chatArray = this.dataService.chatsArray;
  }
    //Ion Content Scroll
    logScrolling(event){
      // Hide Header on on scroll down
      if (event.detail.scrollTop > this.lastY) {
        // console.log(event.detail.scrollTop);
        document.querySelector(".header").classList.remove('nav-down');
        document.querySelector(".header").classList.add('nav-up');
        document.querySelector(".super-tab").classList.add('super-tab-margin-top');

      }else {
        
        document.querySelector(".header").classList.remove('nav-up');
        document.querySelector(".header").classList.add('nav-down');
        
        document.querySelector(".super-tab").classList.remove('super-tab-margin-top');
      }
      this.lastY = event.detail.scrollTop;
    } 
  menuBarItem(menuItem){
    switch(menuItem){
      case 'user':
        document.getElementById("myDropdownUser").classList.toggle("show");
        document.getElementById("myDropdownSettings").classList.remove("show");
        document.getElementById("myDropdownWallet").classList.remove("show");
        document.getElementById("myDropdownStickers").classList.remove("show");
        break;
      case 'settings':
        document.getElementById("myDropdownSettings").classList.toggle("show");
        document.getElementById("myDropdownUser").classList.remove("show");
        document.getElementById("myDropdownWallet").classList.remove("show");
        document.getElementById("myDropdownStickers").classList.remove("show");
        break;
      case 'wallet':
        document.getElementById("myDropdownWallet").classList.toggle("show");
        document.getElementById("myDropdownSettings").classList.remove("show");
        document.getElementById("myDropdownUser").classList.remove("show");
        document.getElementById("myDropdownStickers").classList.remove("show");
        break;
      case 'stickers':
        document.getElementById("myDropdownStickers").classList.toggle("show");
        document.getElementById("myDropdownWallet").classList.remove("show");
        document.getElementById("myDropdownSettings").classList.remove("show");
        document.getElementById("myDropdownUser").classList.remove("show");
        break;
      default: 
        break;
    }
  }
  menuSubItems(itemsValue){
    console.log(itemsValue);
  }
  closeDropDown(){
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var dropdownsSettings = document.getElementsByClassName("dropdown-content-settings");
        var dropdownsWallet = document.getElementsByClassName("dropdown-content-wallet");
        var dropdownsStickers = document.getElementsByClassName("dropdown-content-stickers");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
        for (i = 0; i < dropdownsSettings.length; i++) {
          var openDropdown = dropdownsSettings[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
        for (i = 0; i < dropdownsWallet.length; i++) {
          var openDropdown = dropdownsWallet[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
        for (i = 0; i < dropdownsStickers.length; i++) {
          var openDropdown = dropdownsStickers[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }
  segmentChanged(ev){
    // console.log(ev);
    this.segmentSelected = ev.detail.value;
  }
  openProfile(){
    this.navCtrl.navigateForward('/profile');
  }
  //Show Search Element
  showCloseSearch(value){
    console.log(value);
    if(value == 'show'){
      console.log(value);
      document.getElementById('searchInput').classList.add('search-bar-div-show');
      document.getElementById('wallet-value-more-div').classList.add('z-index-neg');
      this.myInput.setFocus();
    }else{
      document.getElementById('searchInput').classList.remove('search-bar-div-show');
      this.searchValue = '';
      this.dataService.setSearchObservable('');
      setTimeout(() => {
        document.getElementById('wallet-value-more-div').classList.remove('z-index-neg');
      }, 300);
    }
  }
  //Search Item
  searchItem(event){
    // console.log(event.detail.value);
    this.dataService.setSearchObservable(event.detail.value);
  }

  pickMoreOption(event){
    // console.log(event);
    this.sectionSelect.value = '';
    if(event.detail.value == 'profile'){
      this.navCtrl.navigateForward('/profile');
    }else if(event.detail.value == 'settings'){
      this.navCtrl.navigateForward('/settings');
    }else if(event.detail.value == 'stickers'){
      this.navCtrl.navigateForward('/sticker');
    }else if(event.detail.value == 'go-premium'){
      this.navCtrl.navigateForward('/membership');
    }
  }
  ionViewWillEnter(){
    if(localStorage.getItem('themeColor') == 'dark'){
      document.body.setAttribute('color-theme' , 'dark');
      // this.applogo = 'assets/imgs/app-logo-dark.jpg';
      this.applogo = 'assets/imgs/app-logo-light.png';
    }else{
      document.body.setAttribute('color-theme' , 'light');
      this.applogo = 'assets/imgs/app-logo-light.png';
    }
  }
}

