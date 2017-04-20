import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {routedComponents, AssignmentRoutingModule, exportComponents} from "./assignment.routing";

@NgModule({
  imports: [AssignmentRoutingModule, SharedModule],
  declarations: [routedComponents],
  exports: [exportComponents]
})
export class AssignmentModule { }
