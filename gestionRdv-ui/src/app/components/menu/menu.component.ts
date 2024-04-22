import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HelperService } from 'src/app/guard/guard-token/helper.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private jwtS:JwtHelperService=new JwtHelperService();
  decodedToken: any;
  @Input() isAdmin=false;
  @Input() isPatient=false;
  userName="";

  
  role='user';
  
  constructor(
    private router:Router,
    private helper:HelperService,
   
    
  ){
    this.decodedToken=this.jwtS.decodeToken(localStorage.getItem('token') as string)
  };

  ngOnInit():void{
    if(this.isAdmin){
      this.role='admin';
    };

    this.helper.getFullName().subscribe(
      (val)=>{
        const userNameFromToken= this.userName=this.decodedToken.fullName;
        this.userName=val || userNameFromToken
      }
    )

  };



  logout(): void {
    // Clear  authentication token 
    
    localStorage.removeItem('token');
    localStorage.clear();

    // Redirect the user to the login page
    this.router.navigate(['/login']);
  }

}
