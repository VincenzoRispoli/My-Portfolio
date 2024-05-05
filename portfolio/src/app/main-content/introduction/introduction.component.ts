import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuMobileService } from '../../shared/components/services/menu-mobile.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/components/services/translation.service';


@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss', './mediaQueries-introd.component.scss', './fillBtnStyles-introd.component.scss']
})
export class IntroductionComponent {

  menuService = inject(MenuMobileService)
  translate = inject(TranslationService);

  isHover: boolean = false;

  onHover() {
    this.isHover = true
  }

  onLeave() {
    this.isHover = false
  }

}
