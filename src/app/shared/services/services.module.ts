import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HackernewsApiService } from './hackernews-api.service';

@NgModule({
  imports: [
    HttpModule
  ]
})
/* For registering services with Angular in root module */
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        HackernewsApiService
      ]
    };
  }
}

/* For importing services in to components */
export {
  HackernewsApiService
}
