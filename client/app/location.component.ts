import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Location }    from './location';

export class City {
	constructor(public id : integer,
				public name : string) {}

	City.prototype.toString = function() {
	   return JSON.stringify(this);    ;
	}
}

@Component({
  moduleId: module.id,
  selector: 'location',
  templateUrl: 'location.component.html',
  providers: [
  { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LocationComponent),
      multi: true
    }
  ]
})
export class LocationComponent {
	public cities : Array<City> = [
		{
			"id" : "6861",
			"name" : "Rio de Janeiro"
		}
	];

	@Input()
	_model = new Location();

	get model() {
	 	return this._model;
	}

	set model(val) {
		if (val !== undefined && val != null) {
			this._model = val;
			this.propagateChange(this._model);
		}
	}

	onChange(newValue : City) {
		this._model.city = this.cities[newValue].name;
		this._model.city_id = this.cities[newValue].id;
	}

	writeValue(value: any) {
		this._model = value;
		this.propagateChange(this._model);
	}

	propagateChange = (_: any) => {};

	registerOnChange(fn) {
		this.propagateChange = fn;
	}

	registerOnTouched() {}
}