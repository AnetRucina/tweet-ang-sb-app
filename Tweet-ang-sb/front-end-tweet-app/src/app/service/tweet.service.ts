import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tweet } from '../model/tweet';
import { TweetReply } from '../model/tweetReply';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  likeTweet(id: string):Observable<Tweet>{
    return this._httpClient.put<Tweet>(environment.APP_URL+'/'+sessionStorage.getItem('loginId')+'/like/'+id,{});
  }
  getTweetReplies(id: any) :Observable<TweetReply[]>{
    return this._httpClient.get<TweetReply[]>(environment.APP_URL+'/'+'/reply/'+id);
  }
  constructor(private _httpClient: HttpClient) { }

  getAllTweetsOfUser():Observable<Tweet[]>{
    return this._httpClient.get<Tweet[]>(environment.APP_URL+'/'+sessionStorage.getItem('loginId'));
  }
  
  postTweet(tweet:any):Observable<Tweet>{
    return this._httpClient.post<any>(environment.APP_URL+'/'+sessionStorage.getItem('loginId')+'/add',tweet);
  }
  deleteTweet(tweetId:string):Observable<Tweet[]>{
    return this._httpClient.delete<Tweet[]>(environment.APP_URL+'/'+sessionStorage.getItem('loginId')+'/delete/'+tweetId);
  }
  editTweet(tweet:any):Observable<Tweet>{
    return this._httpClient.put<any>(environment.APP_URL+'/'+sessionStorage.getItem('loginId')+'/update/',tweet);
  }
  searchTweetsByUser(loginId:string):Observable<Tweet[]>{
    return this._httpClient.get<Tweet[]>(environment.APP_URL+'/'+loginId);
  }
  GetAllTweets():Observable<Tweet[]>{
    return this._httpClient.get<Tweet[]>(environment.APP_URL+'/all');
  }
  postReply(tweetreply:TweetReply,id:any):Observable<Tweet>{
    return this._httpClient.post<any>(environment.APP_URL+'/'+sessionStorage.getItem('loginId')+'/reply/'+id,tweetreply);
  }
}
