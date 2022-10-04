import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralsettingsPageRoutingModule } from './generalsettings-routing.module';

import { GeneralsettingsPage } from './generalsettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralsettingsPageRoutingModule
  ],
  declarations: [GeneralsettingsPage]
})
export class GeneralsettingsPageModule {}
