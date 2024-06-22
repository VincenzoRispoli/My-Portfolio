import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogSuccessService } from '../../../shared/components/services/dialog-success.service';
import { MenuMobileService } from '../../../shared/components/services/menu-mobile.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../shared/components/services/translation.service';

@Component({
  selector: 'app-success-pop-up',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './success-pop-up.component.html',
  styleUrl: './success-pop-up.component.scss'
})
export class SuccessPopUpComponent {

  dialogService = inject(DialogSuccessService);
  translate = inject(TranslationService);
  menuService = inject(MenuMobileService);

  isHover: boolean = false;

  onHover() {
    this.isHover = true;
  }

  onLeave(){
    this.isHover = false;
  }
}
