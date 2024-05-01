import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuMobileService } from '../../../shared/components/services/menu-mobile.service';
import { TranslateModule } from '@ngx-translate/core'; // always import the translate module in every component, to use the Translate Service
import { TranslationService } from '../../../shared/components/services/translation.service';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {

  menuService = inject(MenuMobileService);
  translate = inject(TranslationService)

}
