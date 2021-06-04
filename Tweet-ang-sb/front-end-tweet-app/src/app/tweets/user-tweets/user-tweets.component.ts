import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Tweet } from 'src/app/model/tweet';
import { User } from 'src/app/model/user';
import { TweetService } from 'src/app/service/tweet.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-tweets',
  templateUrl: './user-tweets.component.html',
  styleUrls: ['./user-tweets.component.scss']
})
export class UserTweetsComponent implements OnInit {
  searchUser = new FormControl();
  nameOptions: User[];
  tweetlist: Tweet[];
  userRestrictionFlag:boolean;
  constructor(private tweetService:TweetService,private userService:UserService) { }

  ngOnInit(): void {
    this.userRestrictionFlag=true;
   this.tweetService.GetAllTweets().subscribe(d=>{
     this.tweetlist=d;
   });
  }
  searchByNameContains(size?: Number) {
    this.userService.searchUser(this.searchUser.value).subscribe(d => {
      console.log(d);
      if(d)
      this.nameOptions =d;
      else
      this.nameOptions=[];
    });
  }
  getOptionText(option: User) {
    return option.firstName;
  }
  SearchTweetByUser(value: any){
    console.log(value.loginId);
   this.tweetService.searchTweetsByUser(value.loginId).subscribe(d=>{
    this.tweetlist=d;
  })
  }
}
