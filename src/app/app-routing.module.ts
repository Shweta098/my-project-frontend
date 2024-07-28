import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoticesComponent } from './components/notices/notices.component';
import { AuthActivateRouteGuard } from './routeguards/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthActivateRouteGuard]},
  {path: 'account', component: AccountComponent, canActivate: [AuthActivateRouteGuard]},
  { path: 'notices', component: NoticesComponent},
  { path: 'logout', component: LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
