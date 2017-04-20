import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {CreateRefinementRule} from "./create/create-refinement-rule.component";

const routes: Routes = [
  {
    path: 'create-refinement-rule',
    component: CreateRefinementRule
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefinementRoutingModule {
}

export const routedComponents = [
  CreateRefinementRule
];

export const exportComponents = [
  CreateRefinementRule
];
