import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {routedComponents, AssignmentRoutingModule, exportComponents} from "./assignment.routing";
import {AssignmentService} from "./assignment.service";

@NgModule({
  imports: [AssignmentRoutingModule, SharedModule],
  declarations: [routedComponents],
  exports: [exportComponents],
  providers: [AssignmentService]
})
export class AssignmentModule { }
