import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/dialog/error-dialog/error-dialog.component';
import { ConfirmedValidator } from 'src/app/model/validators';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.scss']
})
export class PasswordUpdateComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,public dialog: MatDialog, private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      loginId: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    });

  }



  onSubmit() {
    this.userService.updatePassword(this.form.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/login']);
    }, (error) => {
      console.log(error)
      const dialogRef = this.dialog.open(ErrorDialogComponent, {

        data: error.error.message
      }
      );
    })
    console.log(this.form.value)
  }
}
