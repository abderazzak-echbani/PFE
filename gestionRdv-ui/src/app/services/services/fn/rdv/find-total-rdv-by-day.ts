/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RdvSumDayDetails } from '../../models/rdv-sum-day-details';

export interface FindTotalRdvByDay$Params {
  start: string;
  end: string;
}

export function findTotalRdvByDay(http: HttpClient, rootUrl: string, params: FindTotalRdvByDay$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RdvSumDayDetails>>> {
  const rb = new RequestBuilder(rootUrl, findTotalRdvByDay.PATH, 'get');
  if (params) {
    rb.query('start', params.start, {});
    rb.query('end', params.end, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RdvSumDayDetails>>;
    })
  );
}

findTotalRdvByDay.PATH = '/rdvs/bydays';
