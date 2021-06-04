import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.scss']
})
export class PostTweetComponent implements OnInit {
  tweetMessageForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private tweetSevice: TweetService,
    public dialogRef: MatDialogRef<PostTweetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.tweetMessageForm = this.formBuilder.group({
      tweetMessage: ['', [Validators.required]]
    });
  }
  postTweet() {
    if (this.data.updateFlag) {
      this.tweetSevice.postReply(this.tweetMessageForm.value,this.data.id).subscribe(data => {
        console.log(data)
        this.dialogRef.close();
      })
    } else {
      this.tweetSevice.postTweet(this.tweetMessageForm.value).subscribe(data => {
        console.log(this.data.updateFlag);
        this.dialogRef.close();
      })
     
    }
  }
}
