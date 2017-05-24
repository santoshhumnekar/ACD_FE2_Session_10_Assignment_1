import { Injectable} from '@angular/core';

@Injectable()
export class AddressService {
	
	constructor() { }
 
 setAddress(city:string,country:string):any
 {
 	console.log("Citys: "+city+" Countrys: "+country)
	  return { City: city, Country: country };
 }
}
