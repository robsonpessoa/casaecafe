import { Hirer }    from './hirer';
import { Location }    from './location';
import { JobCategory }    from './job-category';

export class Opportunity {

	constructor(
	    public id: number,
	    public title: string,
	    public description: string,
	    public created_at: date,
	    public is_contact_available: boolean,
	    public is_active: boolean,
	    public hirer: Hirer,
	    public location: Location,
	    public frequency: string,
	    public is_automatic: boolean,
	    public score: integer,
	    public category: JobCategory,
	    public salary_requirements: float,
	    public characteristics: Array<string>,
	    public starts: string,
	    public amount_candidates: integer,
	    public amount_visualizations: integer,
	    public feedback: string,
	    public salary_research: string,
	    public relevancy: string
	  ) { 
	  	this.location = new Location();
	  	this.created_at = new Date();
	  	this.is_contact_available = true;
	  	this.is_active = true;
	  	this.is_automatic = true;
	  	this.score = 0;
	  	this.characteristics = [];
	  	this.amount_candidates = 0;
	  	this.amount_visualizations = 0; 
	  	this.feedback = "";
	  	this.salary_research = "";
	  	this.relevancy = "";
	  }
}