import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { HackernewsApiService } from '../../shared/services/services.module';

import { NewsItem } from '../../shared/models/news-item';

interface FeedType {
  feedType: string;
}

interface PageNum {
  page: string;
}

@Component({
  selector: 'hn-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  items: NewsItem[];
  feedType: string;
  pageNum: number;
  listStart: number;

  constructor(
    private _route: ActivatedRoute,
    private _hnApi: HackernewsApiService
  ) { }

  ngOnInit() {
    this._route.data
      .subscribe((data: FeedType) => this.feedType = data.feedType);
    this._route.params
      .switchMap((params: PageNum) => {
        this.pageNum = +params.page || 1; // Number(params.page) || 1
        return this._hnApi.fetchFeed(this.feedType, this.pageNum);
      })
      .subscribe(
        (items: NewsItem[]) => {
          this.items = items;
          this.listStart = (this.pageNum - 1) * 30 + 1;
          setTimeout(() => window.scrollTo(0, 0));
        },
        error => console.log('Error fetching feed', error)
      );
  }

}
