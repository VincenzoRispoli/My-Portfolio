import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/components/services/translation.service';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  isHover: boolean = false;
  translate = inject(TranslationService)

  translateToLeft() {
    this.isHover = true;
  }

  translateToRight() {
    this.isHover = false;
  }
}
