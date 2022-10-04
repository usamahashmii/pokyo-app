import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageeditPage } from './imageedit.page';

const routes: Routes = [
  {
    path: '',
    component: ImageeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageeditPageRoutingModule {}
