import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./containers/home/home.component";
import {NgModule} from "@angular/core";
import {CreateComponent} from "./containers/create/create.component";
import {EintragComponent} from "./containers/eintrag/eintrag.component";
import {SubEintragComponent} from "./containers/sub-eintrag/sub-eintrag.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'EintragmussGeandertWerden', component: EintragComponent },
  { path: 'SubEintragmussGeandertWerden', component: SubEintragComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
