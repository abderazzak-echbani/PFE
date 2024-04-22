/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete1 } from '../fn/rdv/delete-1';
import { Delete1$Params } from '../fn/rdv/delete-1';
import { findAll1 } from '../fn/rdv/find-all-1';
import { FindAll1$Params } from '../fn/rdv/find-all-1';
import { findAllByActeMedicaleId } from '../fn/rdv/find-all-by-acte-medicale-id';
import { FindAllByActeMedicaleId$Params } from '../fn/rdv/find-all-by-acte-medicale-id';
import { findAllByPatientId } from '../fn/rdv/find-all-by-patient-id';
import { FindAllByPatientId$Params } from '../fn/rdv/find-all-by-patient-id';
import { findAllByStatusId } from '../fn/rdv/find-all-by-status-id';
import { FindAllByStatusId$Params } from '../fn/rdv/find-all-by-status-id';
import { findById1 } from '../fn/rdv/find-by-id-1';
import { FindById1$Params } from '../fn/rdv/find-by-id-1';
import { findTotalRdvByDay } from '../fn/rdv/find-total-rdv-by-day';
import { FindTotalRdvByDay$Params } from '../fn/rdv/find-total-rdv-by-day';
import { getSumOfRdvs } from '../fn/rdv/get-sum-of-rdvs';
import { GetSumOfRdvs$Params } from '../fn/rdv/get-sum-of-rdvs';
import { getSumOfRdvsByActeMedicale } from '../fn/rdv/get-sum-of-rdvs-by-acte-medicale';
import { GetSumOfRdvsByActeMedicale$Params } from '../fn/rdv/get-sum-of-rdvs-by-acte-medicale';
import { getSumOfRdvsByStatus } from '../fn/rdv/get-sum-of-rdvs-by-status';
import { GetSumOfRdvsByStatus$Params } from '../fn/rdv/get-sum-of-rdvs-by-status';
import { getUnavailableDates } from '../fn/rdv/get-unavailable-dates';
import { GetUnavailableDates$Params } from '../fn/rdv/get-unavailable-dates';
import { getUnavailableHours } from '../fn/rdv/get-unavailable-hours';
import { GetUnavailableHours$Params } from '../fn/rdv/get-unavailable-hours';
import { RdvDto } from '../models/rdv-dto';
import { RdvSumDayDetails } from '../models/rdv-sum-day-details';
import { save1 } from '../fn/rdv/save-1';
import { Save1$Params } from '../fn/rdv/save-1';

@Injectable({ providedIn: 'root' })
export class RdvService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll1()` */
  static readonly FindAll1Path = '/rdvs/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: FindAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RdvDto>>> {
    return findAll1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: FindAll1$Params, context?: HttpContext): Observable<Array<RdvDto>> {
    return this.findAll1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RdvDto>>): Array<RdvDto> => r.body)
    );
  }

  /** Path part for operation `save1()` */
  static readonly Save1Path = '/rdvs/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1$Response(params: Save1$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1(params: Save1$Params, context?: HttpContext): Observable<number> {
    return this.save1$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById1()` */
  static readonly FindById1Path = '/rdvs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: FindById1$Params, context?: HttpContext): Observable<StrictHttpResponse<RdvDto>> {
    return findById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: FindById1$Params, context?: HttpContext): Observable<RdvDto> {
    return this.findById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<RdvDto>): RdvDto => r.body)
    );
  }

  /** Path part for operation `delete1()` */
  static readonly Delete1Path = '/rdvs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: Delete1$Params, context?: HttpContext): Observable<void> {
    return this.delete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getUnavailableHours()` */
  static readonly GetUnavailableHoursPath = '/rdvs/unavailable-hours';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUnavailableHours()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnavailableHours$Response(params: GetUnavailableHours$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getUnavailableHours(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUnavailableHours$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnavailableHours(params: GetUnavailableHours$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getUnavailableHours$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `getUnavailableDates()` */
  static readonly GetUnavailableDatesPath = '/rdvs/unavailable-dates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUnavailableDates()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnavailableDates$Response(params?: GetUnavailableDates$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getUnavailableDates(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUnavailableDates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnavailableDates(params?: GetUnavailableDates$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getUnavailableDates$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `getSumOfRdvs()` */
  static readonly GetSumOfRdvsPath = '/rdvs/total';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSumOfRdvs()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSumOfRdvs$Response(params?: GetSumOfRdvs$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getSumOfRdvs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSumOfRdvs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSumOfRdvs(params?: GetSumOfRdvs$Params, context?: HttpContext): Observable<number> {
    return this.getSumOfRdvs$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getSumOfRdvsByStatus()` */
  static readonly GetSumOfRdvsByStatusPath = '/rdvs/total-by-status';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSumOfRdvsByStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSumOfRdvsByStatus$Response(params?: GetSumOfRdvsByStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<{
}>>> {
    return getSumOfRdvsByStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSumOfRdvsByStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSumOfRdvsByStatus(params?: GetSumOfRdvsByStatus$Params, context?: HttpContext): Observable<Array<{
}>> {
    return this.getSumOfRdvsByStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{
}>>): Array<{
}> => r.body)
    );
  }

  /** Path part for operation `getSumOfRdvsByActeMedicale()` */
  static readonly GetSumOfRdvsByActeMedicalePath = '/rdvs/total-by-acte-medicale';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSumOfRdvsByActeMedicale()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSumOfRdvsByActeMedicale$Response(params?: GetSumOfRdvsByActeMedicale$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<{
}>>> {
    return getSumOfRdvsByActeMedicale(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSumOfRdvsByActeMedicale$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSumOfRdvsByActeMedicale(params?: GetSumOfRdvsByActeMedicale$Params, context?: HttpContext): Observable<Array<{
}>> {
    return this.getSumOfRdvsByActeMedicale$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{
}>>): Array<{
}> => r.body)
    );
  }

  /** Path part for operation `findAllByStatusId()` */
  static readonly FindAllByStatusIdPath = '/rdvs/status/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByStatusId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByStatusId$Response(params: FindAllByStatusId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RdvDto>>> {
    return findAllByStatusId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByStatusId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByStatusId(params: FindAllByStatusId$Params, context?: HttpContext): Observable<Array<RdvDto>> {
    return this.findAllByStatusId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RdvDto>>): Array<RdvDto> => r.body)
    );
  }

  /** Path part for operation `findAllByPatientId()` */
  static readonly FindAllByPatientIdPath = '/rdvs/patient/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByPatientId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByPatientId$Response(params: FindAllByPatientId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RdvDto>>> {
    return findAllByPatientId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByPatientId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByPatientId(params: FindAllByPatientId$Params, context?: HttpContext): Observable<Array<RdvDto>> {
    return this.findAllByPatientId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RdvDto>>): Array<RdvDto> => r.body)
    );
  }

  /** Path part for operation `findTotalRdvByDay()` */
  static readonly FindTotalRdvByDayPath = '/rdvs/bydays';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findTotalRdvByDay()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTotalRdvByDay$Response(params: FindTotalRdvByDay$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RdvSumDayDetails>>> {
    return findTotalRdvByDay(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findTotalRdvByDay$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTotalRdvByDay(params: FindTotalRdvByDay$Params, context?: HttpContext): Observable<Array<RdvSumDayDetails>> {
    return this.findTotalRdvByDay$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RdvSumDayDetails>>): Array<RdvSumDayDetails> => r.body)
    );
  }

  /** Path part for operation `findAllByActeMedicaleId()` */
  static readonly FindAllByActeMedicaleIdPath = '/rdvs/acte-medicale/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByActeMedicaleId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByActeMedicaleId$Response(params: FindAllByActeMedicaleId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RdvDto>>> {
    return findAllByActeMedicaleId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByActeMedicaleId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByActeMedicaleId(params: FindAllByActeMedicaleId$Params, context?: HttpContext): Observable<Array<RdvDto>> {
    return this.findAllByActeMedicaleId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RdvDto>>): Array<RdvDto> => r.body)
    );
  }

}
