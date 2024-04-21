import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';


@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MenuMobileComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

}
