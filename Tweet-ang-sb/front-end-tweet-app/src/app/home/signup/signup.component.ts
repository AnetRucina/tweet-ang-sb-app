import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/dialog/error-dialog/error-dialog.component';
import { ConfirmedValidator } from 'src/app/model/validators';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private fb: FormBuilder,
    public dialog: MatDialog,public dialogRef: MatDialogRef<SignupComponent>,private router:Router,private userService:UserService) {
    
  }
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      loginId: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      contactNumber: ['', Validators.required]
    }, { 
      validator: ConfirmedValidator('password', 'confirmPassword')
    });
  }
  onRegister(){
    this.userService.register(this.signupForm.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/login']);
      this.dialogRef.close();
    },(error)=>{
      console.log(error)
      const dialogRef = this.dialog.open(ErrorDialogComponent, {
        data:error.error.message
       }
       );
    })

  }
}
