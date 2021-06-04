import { Component, Input, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { PostTweetComponent } from 'src/app/dialog/post-tweet/post-tweet.component';
import { Tweet } from 'src/app/model/tweet';
import { TweetReply } from 'src/app/model/tweetReply';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.scss']
})
export class MyTweetsComponent implements OnInit {
  panelOpenState: boolean = false;
  @Input()
  tweets: Tweet[];
  replyList: TweetReply[];
  @Input()
  userRestrictionFlag: boolean;
  isShown: boolean;
  idFlag: any;
  constructor(public dialog: MatDialog, private tweetService: TweetService) { }

  ngOnInit(): void {
  }
  DeleteTweet(id: string) {
    this.tweetService.deleteTweet(id).subscribe(d => {
      console.log("deleted");
      this.tweets = d;

    })
  }
  ReplyTweet(id: string) {
    const dialogRef = this.dialog.open(PostTweetComponent, {
      width: '750px',
      data: {
        updateFlag: true,
        id: id
      }
    }
    );
    dialogRef.afterClosed().subscribe(res => {
this.viewReplyList(id);
    });
  }
  LikeTweet(tweet: Tweet) {
    this.tweetService.likeTweet(tweet.id).subscribe(d => {
      this.getAllTweets();
    })
  }
  viewreply(id: any) {
    this.idFlag=id;
    this.panelOpenState = !this.panelOpenState
    this.viewReplyList(id);
  }
  viewReplyList(id:string) {
    this.tweetService.getTweetReplies(id).subscribe((data) => {
      this.replyList = data;
      console.log(this.replyList)
    })
  }
  getAllTweets() {
    this.tweetService.getAllTweetsOfUser().subscribe(data => {
      this.tweets = data;
    })
  }
  toggleShow() {

    this.isShown = true;

  }
  toggleHide() {
    this.isShown = false;
  }

  getLastSeen(date:Date){
    let diffInMilliSeconds = Math.abs(new Date(date).getTime() - new Date().getTime()) / 1000;
  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;

  let difference = '';
  if (days > 0) {
    difference += (days === 1) ? `${days} day, ` : `${days} days, `;
  }

  difference += (hours === 0 || hours === 1) ? `${hours} h, ` : `${hours} h, `;

  difference += (minutes === 0 || hours === 1) ? `${minutes} m` : `${minutes} m`; 

  return difference+' ago';
  }
  // getLastSeen(date:Date){
  //   let diffInMilliSeconds = Math.abs(date - new Date()) / 1000;

  //   // calculate days
  //   const days = Math.floor(diffInMilliSeconds / 86400);
  //   diffInMilliSeconds -= days * 86400;
  //   console.log('calculated days', days);

  //   // calculate hours
  //   const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  //   diffInMilliSeconds -= hours * 3600;
  //   console.log('calculated hours', hours);

  //   // calculate minutes
  //   const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  //   diffInMilliSeconds -= minutes * 60;
  //   console.log('minutes', minutes);

  //   let difference = '';
  //   if (days > 0) {
  //     difference += (days === 1) ? `${days} day, ` : `${days} days, `;
  //   }

  //   difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

  //   difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 

  //   return difference;
  //   }
  
}
