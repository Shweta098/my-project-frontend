import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../constants/app.constants';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  validateLoginDetails(user: User) {
    window.sessionStorage.setItem("userdetails", JSON.stringify(user));
    return this.http.get(environment.rooturl + AppConstants.LOGIN_API_URL, {observe: 'response', withCredentials: true});
  }

 
}
