/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetSumOfRdvsByStatus$Params {
}

export function getSumOfRdvsByStatus(http: HttpClient, rootUrl: string, params?: GetSumOfRdvsByStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<{
}>>> {
  const rb = new RequestBuilder(rootUrl, getSumOfRdvsByStatus.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<{
      }>>;
    })
  );
}

getSumOfRdvsByStatus.PATH = '/rdvs/total-by-status';
