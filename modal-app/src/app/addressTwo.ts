import { Component } from '@angular/core';
import { AddressService } from './address.service';
@Component({
	selector: 'AddressTwo',
	template: `<h2>Address 2</h2><br>
				<p>Country:{{obj.Country}},<br> City:{{obj.City}}</p>`,
	providers: [AddressService]
})
export class AddressTwo {
	obj: any;
	constructor(as: AddressService) {
		this.obj = as.setAddress('Cochin', 'India');
		console.log("Country:" + this.obj.Country)
	}

}
