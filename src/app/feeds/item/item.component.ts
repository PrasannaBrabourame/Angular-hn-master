import { Component, Input } from '@angular/core';

import { NewsItem } from '../../shared/models/news-item';

@Component({
  selector: 'hn-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: NewsItem;

  get hasUrl(): boolean {
    return this.item.url.indexOf('http') === 0;
  }
}
