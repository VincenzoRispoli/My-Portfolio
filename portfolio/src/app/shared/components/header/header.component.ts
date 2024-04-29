import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMobileService } from '../services/menu-mobile.service';
import { TranslationService } from '../services/translation.service';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {
  menuService = inject(MenuMobileService);
  translate = inject(TranslationService);

  @HostListener('window:scroll', [])
  onWindowScroll() { // the function listened to by @HostListener must be located just below it;
    if (window.pageYOffset >= 100) {
      this.pageScrolled = true;
    } else {
      this.pageScrolled = false;
    }
  }
  shadedHeader: string = 'rgba(218, 229, 255, 0.5) linear-gradient(0deg, rgba(218, 229, 255, 0.05103291316526615) 0%, rgba(228, 236, 255, 0.6868872549019608) 12%, rgba(255, 255, 255, 0.801733193277311) 38%, rgba(236, 242, 255, 0.874562324929972) 100%)'
  pageScrolled: boolean = false;
  isOnEnglish: boolean = true;

  openMenu() {
    this.menuService.openMenuInNavbar();
  }

  onClickLogo() {
    this.menuService.onLinkClicked();
  }

  onLanguageChange() {
    this.isOnEnglish = !this.isOnEnglish;
  }
}
