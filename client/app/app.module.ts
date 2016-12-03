import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { UserFormComponent } from './user-form.component';
import { NewOpportunityComponent } from './new-opportunity.component';
import { HomeComponent } from './home.component';
import { HttpModule }    from '@angular/http';

const appRoutes: Routes = [
  { path: 'user-opportunities', component: UserFormComponent },
  { path: 'new-opportunity', component: NewOpportunityComponent }
];

@NgModule({
  imports:      [ BrowserModule,
    				FormsModule,
    				HttpModule,
    				RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,
  					UserDetailComponent,
  					UserFormComponent,
  					NewOpportunityComponent,
  					HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
