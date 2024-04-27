import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { MenuMobileService } from '../../menu-mobile.service';



@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, MenuMobileComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent implements OnInit {

  menuMobile = inject(MenuMobileService);

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

