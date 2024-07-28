import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getAccountDetails(id: number){
    //observe : response -> we are telling to backend server to send entire response (not only header or body but entire response)
    //withCredentials = true -> telling angular to send any cookies/sessionIDs/tokens available to backend so that our spring security can know whether the authentication
    // has already happened or not
    return this.http.get(environment.rooturl + AppConstants.ACCOUNT_API_URL + "?id="+id,{ observe: 'response',withCredentials: true });
  }

  getNoticeDetails() {
    return this.http.get(environment.rooturl+AppConstants.NOTICES_API_URL, {observe: 'response'});
  }
}
