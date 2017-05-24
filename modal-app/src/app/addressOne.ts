import{Component} from '@angular/core';
import { AddressService } from './address.service'; 
@Component({
	selector:'AddressOne',
	template: `<h2>Address 1</h2><br>
				<p>Country:{{obj.Country}},<br> City:{{obj.City}}</p>`,
	providers: [AddressService]
})
export class AddressOne
{	
	obj: any;
	constructor(as:AddressService)
	{
		this.obj=as.setAddress('Banglore', 'India');
		console.log("Country:"+ this.obj.Country)
	}

}
