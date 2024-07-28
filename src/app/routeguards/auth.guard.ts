import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthActivateRouteGuard implements CanActivate {
  user = new User();
    
    constructor(private router: Router){
    }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    console.log("a:"+sessionStorage.getItem('userdetails'))
    if(sessionStorage.getItem('userdetails')){
        try{
            this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
        } catch(e) {
            return false;
        }
    }
    if(!this.user || this.user.email==""){
        this.router.navigate(['login']);
    }
    console.log(this.user)
    return this.user?true:false;
}
  
}
