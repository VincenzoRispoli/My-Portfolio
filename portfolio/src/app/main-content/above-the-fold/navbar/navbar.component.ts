import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuMobileService } from '../../../menu-mobile.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  menuService = inject(MenuMobileService);

  openMenu(){
    this.menuService.openMenuInNavbar();
  }
}

