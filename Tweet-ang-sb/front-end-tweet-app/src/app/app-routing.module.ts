import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './home/login-signup/login-signup.component';
import { LoginComponent } from './home/login/login.component';
import { PasswordUpdateComponent } from './home/password-update/password-update.component';
import { SignupComponent } from './home/signup/signup.component';
import { AuthGuardGuard } from './site/auth-guard.guard';
import { ProfileTweetsComponent } from './tweets/profile-tweets/profile-tweets.component';
import { UserTweetsComponent } from './tweets/user-tweets/user-tweets.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: LoginSignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: PasswordUpdateComponent },
  { path: 'profileTweet', component: ProfileTweetsComponent, canActivate: [AuthGuardGuard] },
  { path: 'userTweet', component: UserTweetsComponent, canActivate: [AuthGuardGuard] },
  { path: 'register', component: SignupComponent, canActivate: [AuthGuardGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
