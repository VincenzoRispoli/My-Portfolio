import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuMobileComponent } from '../main-content/above-the-fold/menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, MenuMobileComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
