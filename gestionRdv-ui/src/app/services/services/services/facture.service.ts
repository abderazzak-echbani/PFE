/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete8 } from '../fn/facture/delete-8';
import { Delete8$Params } from '../fn/facture/delete-8';
import { FactureDto } from '../models/facture-dto';
import { findAll8 } from '../fn/facture/find-all-8';
import { FindAll8$Params } from '../fn/facture/find-all-8';
import { findById8 } from '../fn/facture/find-by-id-8';
import { FindById8$Params } from '../fn/facture/find-by-id-8';
import { save8 } from '../fn/facture/save-8';
import { Save8$Params } from '../fn/facture/save-8';

@Injectable({ providedIn: 'root' })
export class FactureService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll8()` */
  static readonly FindAll8Path = '/factures/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8$Response(params?: FindAll8$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FactureDto>>> {
    return findAll8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8(params?: FindAll8$Params, context?: HttpContext): Observable<Array<FactureDto>> {
    return this.findAll8$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FactureDto>>): Array<FactureDto> => r.body)
    );
  }

  /** Path part for operation `save8()` */
  static readonly Save8Path = '/factures/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save8()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8$Response(params: Save8$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save8$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8(params: Save8$Params, context?: HttpContext): Observable<number> {
    return this.save8$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById8()` */
  static readonly FindById8Path = '/factures/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8$Response(params: FindById8$Params, context?: HttpContext): Observable<StrictHttpResponse<FactureDto>> {
    return findById8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8(params: FindById8$Params, context?: HttpContext): Observable<FactureDto> {
    return this.findById8$Response(params, context).pipe(
      map((r: StrictHttpResponse<FactureDto>): FactureDto => r.body)
    );
  }

  /** Path part for operation `delete8()` */
  static readonly Delete8Path = '/factures/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete8()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8$Response(params: Delete8$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8(params: Delete8$Params, context?: HttpContext): Observable<void> {
    return this.delete8$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
