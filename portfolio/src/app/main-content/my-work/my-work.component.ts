import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/components/services/translation.service';
import { MenuMobileService } from '../../shared/components/services/menu-mobile.service';


@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, ProjectComponent, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  translate = inject(TranslationService);
  menuService = inject(MenuMobileService);
  
  constructor() {

  }

  projectsList = [
    {
      title: 'Join',
      image: 'join.png',
      technologies: 'HTML | CSS | Javascript',
      description: "join-decription",
      linkGithub: 'https://github.com/VincenzoRispoli/Join',
      linkLiveTest: 'https://join.vincenzo-rispoli.de/',
    },
    {
      title: 'El Pollo Loco',
      image: 'polloLoco.png',
      technologies: 'HTML | CSS | Javacript',
      description: "pollo-loco-descrip",
      linkGithub: 'https://github.com/VincenzoRispoli/El-Pollo-Loco',
      linkLiveTest: 'https://elpolloloco.vincenzo-rispoli.de/',
    },
  ]
}







