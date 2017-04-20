import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {RefinementRoutingModule, routedComponents, exportComponents} from "./refinement.routing";

@NgModule({
  imports: [RefinementRoutingModule, SharedModule],
  declarations: [routedComponents],
  exports: [exportComponents]
})
export class RefinementModule { }

