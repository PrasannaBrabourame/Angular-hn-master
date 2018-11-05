import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HackernewsApiService } from '../../shared/services/services.module';

import { ItemDetail } from '../../shared/models/item-detail';
import { ParamId } from '../../shared/models/param-id';

/**
 * Smart/Container component that displays item details from feed item and shows
 * the list of attached comments.
 *
 * @export
 * @class ItemDetailsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'hn-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item: ItemDetail;

  /**
   * Creates an instance of ItemDetailsComponent.
   *
   * @param {ActivatedRoute} _route
   * @param {Location} _location
   * @param {HackernewsApiService} _hnApi
   *
   * @memberof ItemDetailsComponent
   */
  constructor(
    private _route: ActivatedRoute,
    private _location: Location,
    private _hnApi: HackernewsApiService
  ) { }

  /**
   * Retrieves current item id from ActivatedRoute and gets the current item details
   * for that item id from the HackernewsApiService.
   *
   * @memberof ItemDetailsComponent
   */
  ngOnInit() {
    this._route.params
      .switchMap((params: ParamId) => this._hnApi.fetchItemContent(+params.id))
      .subscribe(
        (item: ItemDetail) => this.item = item,
        (error: any) => console.log('Could not load item contents', error)
      );
  }

  /**
   * Go back to the previous page.
   *
   * @memberof ItemDetailsComponent
   */
  goBack(): void {
    this._location.back();
  }

  /**
   * Returns true if the url points to an external site.
   *
   * @readonly
   * @type {boolean}
   * @memberof ItemDetailsComponent
   */
  get hasUrl(): boolean {
    return this.item.url.indexOf('http') === 0;
  }

}
