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
}