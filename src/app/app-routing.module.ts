import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'phonenumber',
    loadChildren: () => import('./phonenumber/phonenumber.module').then( m => m.PhonenumberPageModule)
  },
  {
    path: '',
    redirectTo: 'phonenumber',
    pathMatch: 'full'
  },
  {
    path: 'chatbox',
    loadChildren: () => import('./chatbox/chatbox.module').then( m => m.ChatboxPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'calls',
    loadChildren: () => import('./calls/calls.module').then( m => m.CallsPageModule)
  },
  {
    path: 'updates',
    loadChildren: () => import('./updates/updates.module').then( m => m.UpdatesPageModule)
  },
  {
    path: 'imageedit',
    loadChildren: () => import('./imageedit/imageedit.module').then( m => m.ImageeditPageModule)
  },
  {
    path: 'images',
    loadChildren: () => import('./images/images.module').then( m => m.ImagesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'calling',
    loadChildren: () => import('./calling/calling.module').then( m => m.CallingPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'generalsettings',
    loadChildren: () => import('./generalsettings/generalsettings.module').then( m => m.GeneralsettingsPageModule)
  },
  {
    path: 'notificationsettings',
    loadChildren: () => import('./notificationsettings/notificationsettings.module').then( m => m.NotificationsettingsPageModule)
  },
  {
    path: 'messagingsettings',
    loadChildren: () => import('./messagingsettings/messagingsettings.module').then( m => m.MessagingsettingsPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then( m => m.SecurityPageModule)
  },
  {
    path: 'apps',
    loadChildren: () => import('./apps/apps.module').then( m => m.AppsPageModule)
  },
  {
    path: 'sticker',
    loadChildren: () => import('./sticker/sticker.module').then( m => m.StickerPageModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'membership',
    loadChildren: () => import('./membership/membership.module').then( m => m.MembershipPageModule)
  },
  {
    path: 'groupdetails',
    loadChildren: () => import('./groupdetails/groupdetails.module').then( m => m.GroupdetailsPageModule)
  },
  {
    path: 'userdetails',
    loadChildren: () => import('./userdetails/userdetails.module').then( m => m.UserdetailsPageModule)
  },
  {
    path: 'date',
    loadChildren: () => import('./date/date.module').then( m => m.DatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
