import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuMobileService {

  translateY: boolean = false;

  constructor() { }

  openMenuInNavbar() {
    this.translateY = !this.translateY;
  }

  onLinkClicked() {
    this.translateY = false;
  }
}
