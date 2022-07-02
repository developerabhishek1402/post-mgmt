import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostDetailsService } from './post-details.service';

@Component({
	selector: 'app-post-details',
	templateUrl: './post-details.component.html',
	styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
	postId!: number;
	postDetailsData: any = [];
	postCommentsData : any = [];
	constructor(private _postDetailsService: PostDetailsService,
		private _route: ActivatedRoute) { }

	ngOnInit(): void {
		this._route.params.subscribe((param: any) => {
			this.postId = param['id'];
			console.log(this.postId)
		});

		if (this.postId) {
			this.getPostDetails();
			this.getCommentsByPostId();
		}
	}

	/**
	 * Function -- getPostDetails()
	 * Use - Get the Post Details by Id
	 */
	getPostDetails() {
		this._postDetailsService.getPostDetails(this.postId).subscribe((res: any) => {
			if (res.status === 200) {
				this.postDetailsData = res.body;
				console.log(this.postDetailsData)
			}
		}, (err: HttpErrorResponse) => {
			console.log(err)
		});
	}

	getCommentsByPostId(){
		this._postDetailsService.getCommentsByPostId(this.postId).subscribe((res: any) => {
			if (res.status === 200) {
				this.postCommentsData = res.body;
				console.log(this.postCommentsData)
			}
		}, (err: HttpErrorResponse) => {
			console.log(err)
		});
	}

}
