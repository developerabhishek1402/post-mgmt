import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalPopupComponent } from 'src/app/common/confirm-modal-popup/confirm-modal-popup.component';
import { PostsListService } from './posts-list.service';

@Component({
	selector: 'app-posts-list',
	templateUrl: './posts-list.component.html',
	styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
	postsListData: any = [];
	constructor(private _postsListService: PostsListService,
		private _router: Router,
		private _modalService: NgbModal) { }

	ngOnInit(): void {
		this.getPostsList();
	}

	/**
	 * Function - getPostsList()
	 * Use - Get the Lists of the Posts using API
	 */
	getPostsList() {
		this._postsListService.getPostsList().subscribe((res: any) => {
			if (res.status === 200) {
				this.postsListData = res.body;
			}
		}, (err: HttpErrorResponse) => {
			console.log(err)
		});
	}

	/**
	 * Function - onEditPost();
	 * Use - Redirect to Post Details Page
	 * @param id 
	 */
	onEditPost(id: number) {
		this._router.navigate(['/post-details/', id])
	}

	/**
	 * Function - onDeletePost()
	 * Use - Delete the post from posts list
	 * @param id 
	 */
	onDeletePost(id: any) {
		const modelConfirmation = this._modalService.open(ConfirmModalPopupComponent);

		modelConfirmation.result.then((result: any) => {
			if (result[0] != undefined && result[0] == true) {
				this.postsListData = this.postsListData.filter((userId: any) => userId.id != id.id)
			}
		});
	}
}
