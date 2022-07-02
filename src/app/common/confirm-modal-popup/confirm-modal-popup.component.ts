import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal-popup',
  templateUrl: './confirm-modal-popup.component.html',
  styleUrls: ['./confirm-modal-popup.component.css']
})
export class ConfirmModalPopupComponent {

  modalHeader: string = 'Confirmation';
  modalContent = `Are you sure you want to delete this?`;
  mydata: any = [];

  constructor(private activeModal: NgbActiveModal) { }

  closeModal(status : boolean) {
    this.mydata.push(status);
    this.activeModal.close(this.mydata);
  }

  OkModal(status : boolean)
  {
    this.mydata.push(status);
    this.activeModal.close(this.mydata);
  }


}
