import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {
  callArray: any;
  
  chatArrayFiltered: Array<any> = [];
  searchValue: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.callArray = this.dataService.callsArray;

     //Search Item
     this.dataService.getSearchObservable().subscribe(data => {
      // console.log(data);
      // this.searchcriteria.emit(data);
        this.searchValue = data;
        this.chatArrayFiltered = this.callArray;
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


  //Calls Icon
  callsIconFun(call){
    if(call.callType == 'video' && call.callStatus == 'missed'){
      return 'assets/imgs/home-page-imgs/missed-video.png';
    }else if(call.callType == 'video' && call.callStatus == 'recieved'){
      return 'assets/imgs/home-page-imgs/picked-video.png';
    }else if(call.callType == 'audio' && call.callStatus == 'missed'){
      return 'assets/imgs/home-page-imgs/missed-audio.png';
    }else if(call.callType == 'audio' && call.callStatus == 'recieved'){
      return 'assets/imgs/home-page-imgs/picked-audio.png';
    }
  }
  ///Ion Content Scroll
  logScrolling(event){
    //set store data for side menu
    this.dataService.setObservable(event);
  }
}
