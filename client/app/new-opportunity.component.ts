import { Component } from '@angular/core';
import { User }    from './user';
import { Hirer }    from './hirer';
import { JobCategory }    from './job-category';
import { Opportunity }    from './opportunity';

@Component({
  moduleId: module.id,
  selector: 'new-opportunity',
  templateUrl: 'new-opportunity.component.html'
})

export class NewOpportunityComponent {
	model = new Opportunity();

	get diagnostic() { 
		return JSON.stringify(this.model) ;
	}

	public hirers = [
			{
	    "id":20736,
	    "name":"Robson Marques Pessoa",
	    "account_type":"pf",
	    "cnpj":null,
	    "company_contact_name":null,
	    "phone":"(16) 98256-1569",
	    "email":"pessoa.robsonm@gmail.com",
	    "mobile_phone":"(16) 98256-1569",
	    "is_plan_active":true
	  }
	];

	public categories : Array<JobCategory> = [{
		"id" : 1,
		"name" : "Empregada Dom\u00e9stica"
	}];

	onChangeId(value) {
		if (value > 0 && value < 1000)
			this.model.id = 20736 * 1000 + value;
	}

	onChangeHirer(index) {
		this.model.hirer = this.hirers[index];
	}

	onChangeCategory(index) {
		this.model.category = this.categories[index];
	}
}