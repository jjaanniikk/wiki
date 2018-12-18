import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./containers/home/home.component";
import {NgModule} from "@angular/core";
import {CreateComponent} from "./containers/create/create.component";
import {EintragComponent} from "./containers/eintrag/eintrag.component";
import {SubEintragComponent} from "./containers/sub-eintrag/sub-eintrag.component";

const appRoutes: Routes = [
  { path: 'eintraege', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'eintraege/:eintragId', component: EintragComponent },

  { path: 'SubEintragmussGeandertWerden', component: SubEintragComponent },
  { path: '**', redirectTo: '/eintraege', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
