import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Article } from './article';

/*
  Generated class for the RedditProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RedditProvider {

  constructor(public http: Http) {
    console.log('Hello RedditProvider Provider');
  }

  getAllXbox(): Observable<Article>{
    return this.http.get('https://www.reddit.com/r/xboxone.json')
      .map( (result) =>  Observable.from<any>(result.json().data.children))
      .flatMap( (articleJson) =>  articleJson)
      .map((item) => new Article( item.data.title, item.data.selftext, item.data.permalink))
  }

}
