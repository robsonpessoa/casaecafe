import { OnInit } from '@angular/core';

export class Hirer implements OnInit {

	constructor(
	    public id: number,
	    public name: string,
	    public account_type: string,
	    public cnpj: string,
	    public company_contact_name: string,
	    public phone: string,
	    public email: string,
	    public mobile_phone: string,
	    public is_plan_active: boolean
	  ) { }

	ngOnInit(){
     	//called after the constructor and called  after the first ngOnChanges() 
     	id = 1;
  	}
}