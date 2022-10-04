import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagingsettingsPage } from './messagingsettings.page';

const routes: Routes = [
  {
    path: '',
    component: MessagingsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagingsettingsPageRoutingModule {}
