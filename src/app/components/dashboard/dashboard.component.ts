import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  user = new User();

  constructor(private router: Router) {}

  ngOnInit(): void {
    if(sessionStorage.getItem("userdetails")) {
      this.user=JSON.parse(sessionStorage.getItem("userdetails") || "");
    } else {
      this.router.navigate(['login']);
    }
  }

}
