import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFound} from "./components/default-pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/assignment-rules-overview',
    pathMatch: 'full'
  },
  {
    path: '404', component: PageNotFound
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
