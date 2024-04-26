import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMobileService } from '../../../menu-mobile.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() { // the function listened to by @HostListener must be located just below it;
    if (window.pageYOffset >= 100) {
      this.pageScrolled = true;
    } else {
      this.pageScrolled = false;
    }
  }

  pageScrolled: boolean = false;
  menuService = inject(MenuMobileService);

  openMenu() {
    this.menuService.openMenuInNavbar();
  }

}
