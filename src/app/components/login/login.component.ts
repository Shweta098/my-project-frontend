import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  authStatus: string="";
  model=new User();
  isLoad=true;

  constructor(private loginService: LoginService, private router: Router, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    // let loader = this.renderer.selectRootElement('#loader');
    // this.renderer.setStyle(loader, 'display', 'block');
  }

  validateUser(loginForm : NgForm) {
    this.loginService.validateLoginDetails(this.model).subscribe(
      responseData=> {
        console.log(responseData)
        window.sessionStorage.setItem("Authorization", responseData.headers.get("Authorization")!);
        this.model=<User> responseData.body;
        let xsrf = <string>getCookie('XSRF-Token');
        window.sessionStorage.setItem('XSRF-Token', xsrf);
        this.model.authStatus='AUTH';
        window.sessionStorage.setItem("userdetails", JSON.stringify(this.model));
        this.router.navigate(['dashboard']);

      }
    );
  }

}
