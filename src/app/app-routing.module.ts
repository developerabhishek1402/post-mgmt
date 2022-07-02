import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : '',
    loadChildren : () => import('./components/posts-list/posts-list.module').then(m => m.PostsListModule)
  },
  {
    path : 'post-details/:id',
    loadChildren : () => import('./components/post-details/post-details.module').then(m => m.PostDetailsModule)
  },
  {
    path : '**',
    pathMatch : 'full',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
