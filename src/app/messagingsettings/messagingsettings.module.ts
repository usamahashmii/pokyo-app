import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagingsettingsPageRoutingModule } from './messagingsettings-routing.module';

import { MessagingsettingsPage } from './messagingsettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagingsettingsPageRoutingModule
  ],
  declarations: [MessagingsettingsPage]
})
export class MessagingsettingsPageModule {}
