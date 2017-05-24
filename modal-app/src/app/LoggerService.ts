import {Injectable} from '@angular/core';
@Injectable()
export class Logger
{
	log :string[]=[];
	constructor()
	{
		console.log("Array of Logs:"+this.log);
		console.log();
	}
	getLog(logs:string)
	{
		this.log.push(logs);
		console.log(logs);
	}
}
