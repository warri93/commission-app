import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {routedComponents, exportComponents} from "./default-pages.routing";

@NgModule({
  imports: [SharedModule],
  declarations: [routedComponents],
  exports: [exportComponents]
})
export class DefaultPagesModule { }

