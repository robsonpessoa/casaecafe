import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './user';

@Injectable()
export class PositionsService {
	private positionsUrl = 'http:\/\/ec2-35-164-223-211.us-west-2.compute.amazonaws.com';  // URL to web api

	constructor(private httpClient: Http) { }

	getPositionsByUser(user : User) : void {
		const url = `${this.positionsUrl}/hirers/${user.id}/opportunities`;

		return this.httpClient.get(url)
               .toPromise()
               .then(result => {
               		user.availablePositionsJson = result.json();
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