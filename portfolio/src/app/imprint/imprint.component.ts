import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuMobileComponent } from '../main-content/above-the-fold/menu-mobile/menu-mobile.component';
import { TranslationService } from '../shared/components/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, MenuMobileComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  translate = inject(TranslationService)
}
