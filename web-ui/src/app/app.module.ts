import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavigationComponent } from './components/navigation/navigation.component';
import {AppRoutingModule} from "./app-routing.module";
import {EintragService} from "./services/eintrag.service";
import { EintragComponent } from './containers/eintrag/eintrag.component';
import { SubEintragComponent } from './containers/sub-eintrag/sub-eintrag.component';
import { CreateComponent } from './containers/create/create.component';
import { CreateFormComponent } from './components/createEintrag-form/create-form.component';
import { ShowEintragComponent } from './components/show-eintrag/show-eintrag.component';
import { ShowEintragListComponent } from './components/show-eintrag-list/show-eintrag-list.component';
import { UpdateEintragFormComponent } from './components/update-eintrag-form/update-eintrag-form.component';
import { ShowSubeintragListComponent } from './components/show-subeintrag-list/show-subeintrag-list.component';
import { ShowSubeintragComponent } from './components/show-subeintrag/show-subeintrag.component';
import { CreateSubComponent } from './containers/create-sub/create-sub.component';
import { CreateSubFormComponent } from './components/create-sub-form/create-sub-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    EintragComponent,
    SubEintragComponent,
    CreateComponent,
    CreateFormComponent,
    ShowEintragComponent,
    ShowEintragListComponent,
    UpdateEintragFormComponent,
    ShowSubeintragListComponent,
    ShowSubeintragComponent,
    CreateSubComponent,
    CreateSubFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EintragService],
  bootstrap: [AppComponent]
})
export class AppModule { }
