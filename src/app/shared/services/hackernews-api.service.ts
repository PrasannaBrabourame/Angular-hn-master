import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { NewsItem } from '../models/news-item';
import { ItemDetail } from '../models/item-detail';
import { PollResult } from '../models/poll-result';
import { User } from '../models/user';

@Injectable()
export class HackernewsApiService {
  baseUrl: string;

  constructor(private _http: Http) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchFeed(feedType: string, page: number): Observable<NewsItem[]> {
    return this._http
      .get(`${this.baseUrl}/${feedType}?page=${page}`)
      .map(response => response.json());
  }

  fetchItemContent(id: number): Observable<ItemDetail> {
    return this._http
      .get(`${this.baseUrl}/item/${id}`)
      .map(response => {
        const item: ItemDetail = response.json();
        if (item.type === 'poll') {
          const pollLength = item.poll.length;
          item.poll_votes_count = 0;
          for (let i = 0; i < pollLength; i++) {
            this.fetchPollContent(item.id + (i + 1))
              .subscribe((pollResult: PollResult) => {
                item.poll[i] = pollResult;
                item.poll_votes_count += pollResult.points;
              });
          }
        }
        return item;
      });
  }

  fetchPollContent(id: number): Observable<PollResult> {
    return this._http
      .get(`${this.baseUrl}/item/${id}`)
      .map(response => response.json());
  }

  fetchUser(id: string): Observable<User> {
    return this._http
      .get(`${this.baseUrl}/user/${id}`)
      .map(response => response.json());
  }

}
