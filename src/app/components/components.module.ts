import {NgModule} from '@angular/core';

import {ApplicationToolbar} from "./shared/application-toolbar/application-toolbar.component";
import {MasterDataService} from "../master-data.service";
import {CommissionBackEndService} from "../commission-back-end.service";
import {SharedModule} from "./shared/shared.module";
import {AssignmentModule} from "./assignment/assignment.module";
import {RefinementModule} from "./refinement/refinement.module";
import {DefaultPagesModule} from "./default-pages/default-pages.module";

@NgModule({
  imports: [
    SharedModule,
    DefaultPagesModule,
    AssignmentModule,
    RefinementModule
  ],
  providers: [
    MasterDataService,
    CommissionBackEndService
  ]
})

export class ComponentsModule {
}

