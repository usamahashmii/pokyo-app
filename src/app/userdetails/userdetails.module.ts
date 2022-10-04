import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserdetailsPageRoutingModule } from './userdetails-routing.module';

import { UserdetailsPage } from './userdetails.page';

//Image lazy Loading
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image'; // <-- include ScrollHooks
export class LazyLoadImageHooks extends IntersectionObserverHooks{
  setup(attributes: Attributes){
    attributes.offset = 10;
    attributes.defaultImagePath = './assets/imgs/black-img.jpeg';
    attributes.errorImagePath = 'https://i.imgur.com/XkU4Ajf.png';
    return super.setup(attributes);
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserdetailsPageRoutingModule,
    LazyLoadImageModule,
  ],
  declarations: [UserdetailsPage],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
})
export class UserdetailsPageModule {}
