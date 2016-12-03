export class Hirer  {

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
	  ) {  }
}