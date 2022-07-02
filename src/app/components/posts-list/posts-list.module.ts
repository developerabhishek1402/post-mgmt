import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsListRoutingModule } from './posts-list-routing.module';
import { PostsListComponent } from './posts-list.component';
import { HttpClient } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TrimCommentsDirective } from 'src/app/directives/trim-comments.directive';


@NgModule({
  declarations: [
    PostsListComponent,
    TrimCommentsDirective
  ],
  imports: [
    CommonModule,
    PostsListRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers : [HttpClient]
})
export class PostsListModule { }
