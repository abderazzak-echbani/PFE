/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ActeMedicaleDto } from '../models/acte-medicale-dto';
import { delete11 } from '../fn/acte-medicale/delete-11';
import { Delete11$Params } from '../fn/acte-medicale/delete-11';
import { findAll11 } from '../fn/acte-medicale/find-all-11';
import { FindAll11$Params } from '../fn/acte-medicale/find-all-11';
import { findById11 } from '../fn/acte-medicale/find-by-id-11';
import { FindById11$Params } from '../fn/acte-medicale/find-by-id-11';
import { save11 } from '../fn/acte-medicale/save-11';
import { Save11$Params } from '../fn/acte-medicale/save-11';

@Injectable({ providedIn: 'root' })
export class ActeMedicaleService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll11()` */
  static readonly FindAll11Path = '/actes-medicales/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll11()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll11$Response(params?: FindAll11$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ActeMedicaleDto>>> {
    return findAll11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll11(params?: FindAll11$Params, context?: HttpContext): Observable<Array<ActeMedicaleDto>> {
    return this.findAll11$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ActeMedicaleDto>>): Array<ActeMedicaleDto> => r.body)
    );
  }

  /** Path part for operation `save11()` */
  static readonly Save11Path = '/actes-medicales/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save11()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save11$Response(params: Save11$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save11$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save11(params: Save11$Params, context?: HttpContext): Observable<number> {
    return this.save11$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById11()` */
  static readonly FindById11Path = '/actes-medicales/{acte-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById11()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById11$Response(params: FindById11$Params, context?: HttpContext): Observable<StrictHttpResponse<ActeMedicaleDto>> {
    return findById11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById11(params: FindById11$Params, context?: HttpContext): Observable<ActeMedicaleDto> {
    return this.findById11$Response(params, context).pipe(
      map((r: StrictHttpResponse<ActeMedicaleDto>): ActeMedicaleDto => r.body)
    );
  }

  /** Path part for operation `delete11()` */
  static readonly Delete11Path = '/actes-medicales/{acte-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete11()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete11$Response(params: Delete11$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete11(params: Delete11$Params, context?: HttpContext): Observable<void> {
    return this.delete11$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
