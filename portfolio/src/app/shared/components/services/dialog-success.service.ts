import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogSuccessService {

  constructor() { }
  moveForm = false
  isSubmitted = false;

  onFormSubmitted() {
    this.moveForm = true;
    setTimeout(() => {
      this.isSubmitted = true;
    }, 500)
  }

  onClickDialogButton() {
    this.isSubmitted = false;
    setTimeout(() => {
      this.moveForm = false;
    }, 500)
  }
}
