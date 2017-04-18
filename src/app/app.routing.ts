import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponentComponent} from '../app/page-not-found-component/page-not-found-component.component'
import {HomePageComponent} from '../app/home-page/home-page.component'
import {AssignmentRuleDetailComponent} from '../app/assignment-rule-detail/assignment-rule-detail.component'
import {SearchComponent} from '../app/search/search.component'
import {SearchassignmentComponent} from '../app/searchassignment/searchassignment.component';
import {AssignmentRuleFormComponent} from '../app/assignment-rule-form/assignment-rule-form.component';
import {RefinementRuleFormComponent} from '../app/refinement-rule-form/refinement-rule-form.component';
import {EditAssignmentComponent} from "./edit-assignment/edit-assignment.component";

const appRoutes:Routes = [
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
  {path: '**', component: PageNotFoundComponentComponent}
];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
