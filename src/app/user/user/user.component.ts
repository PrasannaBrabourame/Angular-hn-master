import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HackernewsApiService } from '../../shared/services/hackernews-api.service';

import { User } from '../../shared/models/user';
import { ParamId } from '../../shared/models/param-id';

@Component({
  selector: 'hn-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private _route: ActivatedRoute,
    private _location: Location,
    private _hnApi: HackernewsApiService
  ) { }

  ngOnInit() {
    this._route.params
      .switchMap((params: ParamId) => this._hnApi.fetchUser(params.id))
      .subscribe(
        (user: User) => this.user = user,
        (error: any) => console.log('Could not load user details.', error)
      );
  }

  goBack() {
    this._location.back();
  }

}
