import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/dialog/error-dialog/error-dialog.component';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
    public dialog: MatDialog,private router:Router,private userService:UserService) {
    
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      loginId: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }



  onSubmit() {
    this.userService.login(this.form.value).subscribe((data)=>{
      this.userService.setloginInfo(true);
      sessionStorage.setItem("loginId",data.loginId);
      this.userService.setUser(data);
      this.router.navigate(['/profileTweet'],{ queryParams: { userInfo: data.firstName,
        lastName: data.lastName,contactNum: data.contactNumber,username:data.loginId,email:data.email }});
    },(error)=>{
      console.log(error)
      const dialogRef = this.dialog.open(ErrorDialogComponent, {
        data:error.error.message
       }
       );
    })
  console.log(this.form.value)
  
  }
}
