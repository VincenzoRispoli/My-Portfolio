import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuMobileService {

  translateY: boolean = false;
  menuIsOpen: boolean = false;
  isOnEnglish: boolean = true;

  constructor() { }

  openMenuInNavbar() {
    this.translateY = !this.translateY;
    this.menuIsOpen = !this.menuIsOpen;
    if (this.menuIsOpen) {
      document.body.classList.add('overflowHidden');
    } else {
      document.body.classList.remove('overflowHidden');
    }
  }

  onLinkClicked() {
    this.translateY = false;
    this.menuIsOpen = false;
    document.body.classList.remove('overflowHidden');
  }

  onLanguageChange() {
    this.isOnEnglish = !this.isOnEnglish;
  }
}
