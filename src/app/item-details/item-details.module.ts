import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PipesModule } from '../shared/pipes/pipes.module';

import { ItemDetailsComponent } from './item-details/item-details.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path: ':id',
    component: ItemDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [
    ItemDetailsComponent,
    CommentComponent
  ]
})
export class ItemDetailsModule { }
