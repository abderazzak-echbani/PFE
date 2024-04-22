/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AddressDto } from '../models/address-dto';
import { delete10 } from '../fn/address/delete-10';
import { Delete10$Params } from '../fn/address/delete-10';
import { findAll10 } from '../fn/address/find-all-10';
import { FindAll10$Params } from '../fn/address/find-all-10';
import { findById10 } from '../fn/address/find-by-id-10';
import { FindById10$Params } from '../fn/address/find-by-id-10';
import { save10 } from '../fn/address/save-10';
import { Save10$Params } from '../fn/address/save-10';

@Injectable({ providedIn: 'root' })
export class AddressService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll10()` */
  static readonly FindAll10Path = '/addresses/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll10()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll10$Response(params?: FindAll10$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AddressDto>>> {
    return findAll10(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll10(params?: FindAll10$Params, context?: HttpContext): Observable<Array<AddressDto>> {
    return this.findAll10$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AddressDto>>): Array<AddressDto> => r.body)
    );
  }

  /** Path part for operation `save10()` */
  static readonly Save10Path = '/addresses/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save10()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save10$Response(params: Save10$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save10(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save10$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save10(params: Save10$Params, context?: HttpContext): Observable<number> {
    return this.save10$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById10()` */
  static readonly FindById10Path = '/addresses/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById10()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById10$Response(params: FindById10$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressDto>> {
    return findById10(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById10(params: FindById10$Params, context?: HttpContext): Observable<AddressDto> {
    return this.findById10$Response(params, context).pipe(
      map((r: StrictHttpResponse<AddressDto>): AddressDto => r.body)
    );
  }

  /** Path part for operation `delete10()` */
  static readonly Delete10Path = '/addresses/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete10()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete10$Response(params: Delete10$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete10(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete10(params: Delete10$Params, context?: HttpContext): Observable<void> {
    return this.delete10$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
