import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PipesModule } from '../shared/pipes/pipes.module';

import { FeedComponent } from './feed/feed.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: ':page',
    component: FeedComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [
    FeedComponent,
    ItemComponent
  ]
})
export class FeedsModule { }
