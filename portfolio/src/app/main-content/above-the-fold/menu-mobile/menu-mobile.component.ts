import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuMobileService } from '../../../menu-mobile.service';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {

  menuMobile = inject(MenuMobileService);


}
