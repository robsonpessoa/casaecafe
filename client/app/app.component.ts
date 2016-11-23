import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'casa-e-cafe',
  template: `<h1>{{title}}</h1>
  			 <user-form></user-form>
  `,
})

export class AppComponent  { 
	title = 'CasaeCafe.com REST Client';
}