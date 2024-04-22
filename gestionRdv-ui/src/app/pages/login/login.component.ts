import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationRequest } from 'src/app/services/services/models';
import { AuthenticationService } from 'src/app/services/services/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  auhtRequest: AuthenticationRequest = {};
  errorMessages: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService) { };

  login() {
    localStorage.removeItem('token');
    this.errorMessages = [];
    this.authService.authenticate({
      body: this.auhtRequest
    }).subscribe(
      {
        next: async (data) => {
          localStorage.setItem('token', data.token as string);
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(data.token as string);

          if (decodedToken.authority === 'RECEPTIONNISTE') {
            await this.router.navigate(['user/patients']);
          } else if (decodedToken.authority === 'PATIENT') {
            await this.router.navigate(['patient/rdvs-patient']);
          } else {
            await this.router.navigate(['admin/dash']);
          }


        },
        error: (err) => { this.errorMessages.push(err.error.errorMessage) }
      }
    )
  }

  async register() {
    await this.router.navigate(['register'])
  }


}
