import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {CreateRefinementRule} from "./create/create-refinement-rule.component";
import {CreateRefinementRuleGeneralInfo} from "./create/general-info/create-refinement-rule-general-info.component";
import {CreateRefinementRuleDetails} from "./create/details/create-refinement-rule-details.component";
import {CreateRefinementRuleSalesPersons} from "./create/assigned-sales-persons/create-refinement-rule-sales-persons.component";

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
  CreateRefinementRule,
  CreateRefinementRuleGeneralInfo,
  CreateRefinementRuleDetails,
  CreateRefinementRuleSalesPersons
];

export const exportComponents = [
  CreateRefinementRule
];
