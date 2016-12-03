import { Component } from '@angular/core';
import { User } from './user';
import { Hirer } from './hirer';

@Component({
  selector: 'casa-e-cafe',
  template: `<h1 class="top_bar">{{title}}</h1>
  			 <home></home>
  `,
})

export class AppComponent  { 
	title = 'CasaeCafe.com REST Client';
}