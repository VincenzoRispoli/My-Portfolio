import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { MenuMobileService } from '../../menu-mobile.service';



@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MenuMobileComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  menuMobile = inject(MenuMobileService);
  
}

