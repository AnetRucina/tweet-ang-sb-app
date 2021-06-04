import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog,private userService:UserService) { }

  ngOnInit(): void {
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }
  goToRegister(){
    const dialogRef = this.dialog.open(SignupComponent, {
     width:'750px'
    });
  }
}
