import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { MenuMobileService } from '../../shared/components/services/menu-mobile.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/components/services/translation.service';



@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, MenuMobileComponent, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss', './mediaQueries-atf.component.scss']
})
export class AboveTheFoldComponent implements OnInit {

  menuMobile = inject(MenuMobileService);
  translate = inject(TranslationService);

  translateGreet: boolean = false;
  translateFronEnd = false

  ngOnInit() {
    setTimeout(() => {
      this.translateGreet = true
    }, 400);
    setTimeout(() => {
      this.translateFronEnd = true
    }, 800);
  }

}

