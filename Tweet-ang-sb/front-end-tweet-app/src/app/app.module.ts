import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginSignupComponent } from './home/login-signup/login-signup.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { PasswordUpdateComponent } from './home/password-update/password-update.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { ProfileTweetsComponent } from './tweets/profile-tweets/profile-tweets.component';
import { MyTweetsComponent } from './tweets/my-tweets/my-tweets.component';
import { HttpClientModule } from '@angular/common/http';
import { PostTweetComponent } from './dialog/post-tweet/post-tweet.component';
import { HeaderComponent } from './home/header/header.component';
import { UserTweetsComponent } from './tweets/user-tweets/user-tweets.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ErrorDialogComponent } from './dialog/error-dialog/error-dialog.component';
import { CustomDatePipe } from './filters/cudtomdate';

@NgModule({
  declarations: [
    AppComponent, 
    LoginSignupComponent,
    LoginComponent,
    SignupComponent,
    PasswordUpdateComponent,
    ProfileTweetsComponent,
    MyTweetsComponent,
    PostTweetComponent,
    HeaderComponent,
    UserTweetsComponent,
    ErrorDialogComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatListModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  exports: [
    CustomDatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
