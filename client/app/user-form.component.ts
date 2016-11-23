import { Component } from '@angular/core';
import { User }    from './user';
import { PositionsService } from './positions.service';

@Component({
  moduleId: module.id,
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
  providers: [PositionsService]
})

export class UserFormComponent {
  model = new User();
  submitted = false;
  constructor(private positionsService: PositionsService) {}
  
  getPositions() : void { 
    this.submitted = true;
    this.positionsService.getPositionsByUser(this.model);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model) ; }
}