export class Location  {

	constructor(
	    public neighborhood: string,
	    public address: string,
	    public address_type: string,
	    public latitude: integer,
	    public longitude: integer,
	    public city_id: string,
	    public city: string,
	    public zipcode: string,
	    public state: string
	  ) {  }
}