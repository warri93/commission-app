import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponentComponent} from './components/page-not-found-component/page-not-found-component.component'
import {HomePageComponent} from './components/home-page/home-page.component'
import {AssignmentRuleDetailComponent} from './components/assignment-rule-detail/assignment-rule-detail.component'
import {SearchComponent} from './components/search/search.component'
import {SearchassignmentComponent} from './components/searchassignment/searchassignment.component';
import {AssignmentRuleFormComponent} from './components/assignment-rule-form/assignment-rule-form.component';
import {RefinementRuleFormComponent} from './components/refinement-rule-form/refinement-rule-form.component';
import {EditAssignmentComponent} from "./components/edit-assignment/edit-assignment.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'Assignment'
    }
  },
  {
    path: 'rule/:id',
    component: AssignmentRuleDetailComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'create',
    component: AssignmentRuleFormComponent
  },
  {
    path: 'createrefinement',
    component: RefinementRuleFormComponent
  },
  {
    path: 'searchassignments',
    component: SearchassignmentComponent
  },
  {
    path: 'editassignment',
    component: EditAssignmentComponent
  },
  {
    path: '**',
    component: PageNotFoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
