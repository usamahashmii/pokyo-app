import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralsettingsPage } from './generalsettings.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralsettingsPageRoutingModule {}
