import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import {SearchAssignment} from "./search/search-assignment.component";
import {EditAssignment} from "./edit/edit-assignment.component";
import {CreateAssignmentRule} from "./assignment-rule/create/create-assignment-rule.component";
import {AssignmentRuleDetail} from "./assignment-rule/detail/assignment-rule-detail.component";
import {SearchAssignmentRule} from "./assignment-rule/search/search-assignment-rule.component";
import {AssignmentRulesOverview} from "./assignment-rule/assignment-rules-overview.component";
import {CreateRuleGeneralInfo} from "./assignment-rule/create/general-info/create-rule-general-info.component";
import {CreateRuleSalesPersons} from "./assignment-rule/create/assigned-sales-persons/create-rule-sales-persons.component";
import {AssignmentsTable} from "./search/assignments-table.component/assignments-table.component";

const routes: Routes = [
  {
    path: 'assignment-rules-overview',
    component: AssignmentRulesOverview
  },
  {
    path: 'search-assignment',
    component: SearchAssignment
  },
  {
    path: 'edit-assignment',
    component: EditAssignment
  },
  {
    path: 'create-assignment-rule',
    component: CreateAssignmentRule
  },
  {
    path: 'assignment-rule-detail/:id',
    component: AssignmentRuleDetail
  },
  {
    path: 'search-assignment-rule',
    component: SearchAssignmentRule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule {
}

export const routedComponents = [
  SearchAssignment,
  EditAssignment,
  CreateAssignmentRule,
  AssignmentRuleDetail,
  SearchAssignmentRule,
  AssignmentRulesOverview,
  CreateRuleGeneralInfo,
  CreateRuleSalesPersons,
  AssignmentsTable
];

export const exportComponents = [
  SearchAssignment,
  EditAssignment,
  CreateAssignmentRule,
  AssignmentRuleDetail,
  SearchAssignmentRule,
  AssignmentRulesOverview
];
