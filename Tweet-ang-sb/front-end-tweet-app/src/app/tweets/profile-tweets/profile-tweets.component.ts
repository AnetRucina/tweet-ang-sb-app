import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PostTweetComponent } from 'src/app/dialog/post-tweet/post-tweet.component';
import { Tweet } from 'src/app/model/tweet';
import { User } from 'src/app/model/user';
import { TweetService } from 'src/app/service/tweet.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile-tweets',
  templateUrl: './profile-tweets.component.html',
  styleUrls: ['./profile-tweets.component.scss']
})
export class ProfileTweetsComponent implements OnInit {
 tweets:Tweet[];
 user:User;
 firstName:string;
 lastName:string;
 contactNumber:number;
 username:string;
 userRestrictionFlag:boolean;
  email: string;
  constructor(public dialog: MatDialog,private tweetService:TweetService,
    private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user=this.userService.getUser();
    this.userRestrictionFlag=false;
    this.getAllTweets();
  }
  openPostTweetDialog(){
    const dialogRef = this.dialog.open(PostTweetComponent, {
      width:'750px',
      data:{
        updateFlag:false
      }
     }
     );
     dialogRef.afterClosed().subscribe(res => {
        this.getAllTweets();
    });
  }
  getAllTweets() {
    this.tweetService.getAllTweetsOfUser().subscribe(data=>{
      this.tweets=data;
    })
  }
}
