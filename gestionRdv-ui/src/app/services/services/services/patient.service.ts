/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete4 } from '../fn/patient/delete-4';
import { Delete4$Params } from '../fn/patient/delete-4';
import { findAll4 } from '../fn/patient/find-all-4';
import { FindAll4$Params } from '../fn/patient/find-all-4';
import { findById4 } from '../fn/patient/find-by-id-4';
import { FindById4$Params } from '../fn/patient/find-by-id-4';
import { getSumOfPatientsByGender } from '../fn/patient/get-sum-of-patients-by-gender';
import { GetSumOfPatientsByGender$Params } from '../fn/patient/get-sum-of-patients-by-gender';
import { getSumOfUsersByRole } from '../fn/patient/get-sum-of-users-by-role';
import { GetSumOfUsersByRole$Params } from '../fn/patient/get-sum-of-users-by-role';
import { PatientDto } from '../models/patient-dto';
import { save4 } from '../fn/patient/save-4';
import { Save4$Params } from '../fn/patient/save-4';

@Injectable({ providedIn: 'root' })
export class PatientService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll4()` */
  static readonly FindAll4Path = '/patients/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4$Response(params?: FindAll4$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PatientDto>>> {
    return findAll4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4(params?: FindAll4$Params, context?: HttpContext): Observable<Array<PatientDto>> {
    return this.findAll4$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PatientDto>>): Array<PatientDto> => r.body)
    );
  }

  /** Path part for operation `save4()` */
  static readonly Save4Path = '/patients/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4$Response(params: Save4$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4(params: Save4$Params, context?: HttpContext): Observable<number> {
    return this.save4$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById4()` */
  static readonly FindById4Path = '/patients/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4$Response(params: FindById4$Params, context?: HttpContext): Observable<StrictHttpResponse<PatientDto>> {
    return findById4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4(params: FindById4$Params, context?: HttpContext): Observable<PatientDto> {
    return this.findById4$Response(params, context).pipe(
      map((r: StrictHttpResponse<PatientDto>): PatientDto => r.body)
    );
  }

  /** Path part for operation `delete4()` */
  static readonly Delete4Path = '/patients/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4$Response(params: Delete4$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4(params: Delete4$Params, context?: HttpContext): Observable<void> {
    return this.delete4$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getSumOfUsersByRole()` */
  static readonly GetSumOfUsersByRolePath = '/patients/by-role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSumOfUsersByRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSumOfUsersByRole$Response(params?: GetSumOfUsersByRole$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getSumOfUsersByRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSumOfUsersByRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSumOfUsersByRole(params?: GetSumOfUsersByRole$Params, context?: HttpContext): Observable<{
}> {
    return this.getSumOfUsersByRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getSumOfPatientsByGender()` */
  static readonly GetSumOfPatientsByGenderPath = '/patients/by-gender';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSumOfPatientsByGender()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSumOfPatientsByGender$Response(params?: GetSumOfPatientsByGender$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getSumOfPatientsByGender(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSumOfPatientsByGender$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSumOfPatientsByGender(params?: GetSumOfPatientsByGender$Params, context?: HttpContext): Observable<{
}> {
    return this.getSumOfPatientsByGender$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
