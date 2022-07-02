import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsListService {

  constructor(private http : HttpClient) { }

  /**
   * Function -- getPostsList()
   * @returns post list
   */
  getPostsList(){
    return this.http.get(environment.baseUrl + 'posts', {observe:'response'})
  }

  /**
   * Function -- deletePostList()
   * @param id 
   * @returns 
   */
  deletePostList(id : number){
    return this.http.delete(environment.baseUrl + 'posts/'+id, {observe : 'response'})
  }
}
