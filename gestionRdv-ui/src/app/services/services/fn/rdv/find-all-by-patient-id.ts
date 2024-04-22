/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RdvDto } from '../../models/rdv-dto';

export interface FindAllByPatientId$Params {
  id: number;
}

export function findAllByPatientId(http: HttpClient, rootUrl: string, params: FindAllByPatientId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RdvDto>>> {
  const rb = new RequestBuilder(rootUrl, findAllByPatientId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RdvDto>>;
    })
  );
}

findAllByPatientId.PATH = '/rdvs/patient/{id}';
