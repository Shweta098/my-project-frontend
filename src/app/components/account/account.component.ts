import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { User } from 'src/app/models/user';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  user = new User();
  account = new Account();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.user=<User>JSON.parse(sessionStorage.getItem('userdetails')!);
    if(this.user) {
      this.dashboardService.getAccountDetails(this.user.id).subscribe(
        responseData=>{
          this.account=<Account>responseData.body;
          console.log(this.account)
        }
      );
    }
  }

}
