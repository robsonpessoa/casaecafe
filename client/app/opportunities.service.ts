import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './user';

@Injectable()
export class OpportunitiesService {
	private url = 'http:\/\/ec2-35-164-223-211.us-west-2.compute.amazonaws.com';  // URL to web api

	constructor(private httpClient: Http) { }

	save(opportunity : Opportunity) : void {
		const url = `${this.url}/opportunities`;

		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });

		return this.httpClient.post(url, opportunity, options)
               .toPromise()
               .then(result => {
               		alert("A vaga foi criada com sucesso.");
               		window.location.reload();
               })
               .catch(this.handleError);
	}

	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		
		console.error(errMsg);
		alert(errMsg);
		
		return Promise.reject(errMsg);
	}
}