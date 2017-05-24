import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal, } from 'angular2-modal/plugins/bootstrap';
import {AddressWindow} from './AddressModal';
import {Logger} from './LoggerService'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
@NgModule({
		imports: [RouterModule]
})
export class AppComponent {
	title = 'Assignament 10.1!';

	
	constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
		overlay.defaultViewContainer = vcRef;
	}
	onClick() {
		this.modal.open(AddressWindow);	
	}
	

}
