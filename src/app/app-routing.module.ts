import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'news/1', pathMatch: 'full' },
  { path: 'news', loadChildren: 'app/feeds/feeds.module#FeedsModule', data: { feedType: 'news' } },
  { path: 'newest', loadChildren: 'app/feeds/feeds.module#FeedsModule', data: { feedType: 'newest' } },
  { path: 'show', loadChildren: 'app/feeds/feeds.module#FeedsModule', data: { feedType: 'show' } },
  { path: 'ask', loadChildren: 'app/feeds/feeds.module#FeedsModule', data: { feedType: 'ask' } },
  { path: 'jobs', loadChildren: 'app/feeds/feeds.module#FeedsModule', data: { feedType: 'jobs' } },
  { path: 'item', loadChildren: 'app/item-details/item-details.module#ItemDetailsModule' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: '**', redirectTo: 'news/1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
