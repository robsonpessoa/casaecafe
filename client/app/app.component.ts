import { Component } from '@angular/core';
import { User } from './user';
import { Hirer } from './hirer';

@Component({
  selector: 'casa-e-cafe',
  template: `<div class="topbar hline"><h1>CasaeCafe.com <em>REST</em> Client</h1>
  <hr /></div>
  			 <home></home>
  `,
})

export class AppComponent  { 
	title = 'CasaeCafe.com REST Client';
	subtitle = 'REST Client';
}