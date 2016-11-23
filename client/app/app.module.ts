import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { UserFormComponent } from './user-form.component';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,
    				FormsModule,
    				HttpModule ],
  declarations: [ AppComponent,
  					UserDetailComponent,
  					UserFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
