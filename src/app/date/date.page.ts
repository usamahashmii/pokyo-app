import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {
  dob: any;
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }
  async pickDate(event){
    console.log(event);
    this.dob = event.detail.value;
    await this.popoverCtrl.dismiss(this.dob);
  }
}
