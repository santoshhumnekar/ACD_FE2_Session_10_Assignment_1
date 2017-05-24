import { Component } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import * as $ from 'jquery';
@Component({
  selector: 'modal-content',
  styles: [`
        .custom-modal-container {
            padding: 15px;
        }

        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
  //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ template: `

       
      
    <div id="myModal" class="modal-dialog" tabindex="-1" role="dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>

                </button>
                 <h4 class="modal-title" id="myModalLabel">Modal title</h4>

            </div>
            <div class="modal-body">
                <div role="tabpanel">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" ><a href="#uploadTab" aria-controls="uploadTab" role="tab" data-toggle="tab">Upload</a>

                        </li>
                        <li role="presentation" class="active"><a href="#browseTab" aria-controls="browseTab" role="tab" data-toggle="tab">Address</a>

                        </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane " id="uploadTab">upload Tab</div>
                        <div role="tabpanel" class="tab-pane active" id="browseTab"><AddressOne></AddressOne><AddressTwo></AddressTwo></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" dismiss-modal="myModal" >Close</button>
                
            </div>
        </div>
</div>
    
   
              
            `
})
export class AddressWindow  {
  

  public wrongAnswer: boolean;

  constructor() {
    
  }

  close()
  {
    $('#myModal').close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }
}