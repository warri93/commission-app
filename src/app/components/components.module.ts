import {NgModule} from '@angular/core';

import {ApplicationToolbar} from "./application-toolbar/application-toolbar.component";
import {AssignmentRuleFormComponent} from "./assignment-rule-form/assignment-rule-form.component";
import {AssignmentRuleDetailComponent} from "./assignment-rule-detail/assignment-rule-detail.component";
import {EditAssignmentComponent} from "./edit-assignment/edit-assignment.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponentComponent} from "./page-not-found-component/page-not-found-component.component";
import {RefinementRuleFormComponent} from "./refinement-rule-form/refinement-rule-form.component";
import {SearchComponent} from "./search/search.component";
import {SearchassignmentComponent} from "./searchassignment/searchassignment.component";
import {MasterDataService} from "../master-data.service";
import {CommissionBackEndService} from "../commission-back-end.service";
import {AssignmentRulesOverviewComponent} from "./assignment-rules-overview/assignment-rules-overview.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [
    ApplicationToolbar,
    AssignmentRuleFormComponent,
    AssignmentRuleDetailComponent,
    AssignmentRulesOverviewComponent,
    EditAssignmentComponent,
    HomePageComponent,
    PageNotFoundComponentComponent,
    RefinementRuleFormComponent,
    SearchComponent,
    SearchassignmentComponent
  ],
  exports: [
    ApplicationToolbar,
    AssignmentRuleFormComponent,
    AssignmentRuleDetailComponent,
    AssignmentRulesOverviewComponent,
    EditAssignmentComponent,
    HomePageComponent,
    PageNotFoundComponentComponent,
    RefinementRuleFormComponent,
    SearchComponent,
    SearchassignmentComponent
  ],
  providers: [MasterDataService, CommissionBackEndService]
})

export class ComponentsModule {
}
