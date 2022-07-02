import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsService {

  constructor(private http:HttpClient) { }

  /**
   * Function -- getPostDetails()
   * @param id 
   * @returns postDetails by Id
   */
  getPostDetails(id: number){
      return this.http.get(environment.baseUrl + 'posts/'+id, {observe:'response'});
  }

  /**
   * Fucnction - getCommentsByPostId()
   * @param id 
   * @returns comments of the post by Id
   */
  getCommentsByPostId(id : number){
      return this.http.get(environment.baseUrl + 'comments?postId='+id, {observe : 'response'})
  }
}
