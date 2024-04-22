import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private jwtHelper:JwtHelperService=new JwtHelperService();
  private decodedToken:any;
  private fullName$= new BehaviorSubject<string>("");
  constructor() {
    this.decodedToken=this.jwtHelper.decodeToken(localStorage.getItem('token') as string);
   }

   get userId():number{
    return this.decodedToken.userId
   }

   public getFullName(){
    return this.fullName$.asObservable();
   }

   public set fullName(fullName:string){
    this.fullName$.next(fullName);
   }
}
