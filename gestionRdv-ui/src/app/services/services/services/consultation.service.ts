/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ConsultationDto } from '../models/consultation-dto';
import { delete9 } from '../fn/consultation/delete-9';
import { Delete9$Params } from '../fn/consultation/delete-9';
import { findAll9 } from '../fn/consultation/find-all-9';
import { FindAll9$Params } from '../fn/consultation/find-all-9';
import { findById9 } from '../fn/consultation/find-by-id-9';
import { FindById9$Params } from '../fn/consultation/find-by-id-9';
import { save9 } from '../fn/consultation/save-9';
import { Save9$Params } from '../fn/consultation/save-9';

@Injectable({ providedIn: 'root' })
export class ConsultationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll9()` */
  static readonly FindAll9Path = '/consultations/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll9()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll9$Response(params?: FindAll9$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ConsultationDto>>> {
    return findAll9(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll9$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll9(params?: FindAll9$Params, context?: HttpContext): Observable<Array<ConsultationDto>> {
    return this.findAll9$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ConsultationDto>>): Array<ConsultationDto> => r.body)
    );
  }

  /** Path part for operation `save9()` */
  static readonly Save9Path = '/consultations/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save9()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save9$Response(params: Save9$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save9(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save9$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save9(params: Save9$Params, context?: HttpContext): Observable<number> {
    return this.save9$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById9()` */
  static readonly FindById9Path = '/consultations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById9()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById9$Response(params: FindById9$Params, context?: HttpContext): Observable<StrictHttpResponse<ConsultationDto>> {
    return findById9(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById9$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById9(params: FindById9$Params, context?: HttpContext): Observable<ConsultationDto> {
    return this.findById9$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConsultationDto>): ConsultationDto => r.body)
    );
  }

  /** Path part for operation `delete9()` */
  static readonly Delete9Path = '/consultations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete9()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete9$Response(params: Delete9$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete9(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete9$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete9(params: Delete9$Params, context?: HttpContext): Observable<void> {
    return this.delete9$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
