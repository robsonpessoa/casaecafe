import { Component } from '@angular/core';
import { User }    from './user';

@Component({
  moduleId: module.id,
  selector: 'user-form',
  templateUrl: 'user-form.component.html'
})

export class UserFormComponent {
  model = new User();
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}