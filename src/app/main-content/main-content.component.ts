import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { MenuMobileService } from '../shared/components/services/menu-mobile.service';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, AboveTheFoldComponent, IntroductionComponent, SkillSetComponent, MyWorkComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  menuService = inject(MenuMobileService);

  constructor() {
  }
}
