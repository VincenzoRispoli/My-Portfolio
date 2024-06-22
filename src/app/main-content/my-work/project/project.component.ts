import { CommonModule } from '@angular/common';
import { Component, Input, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../shared/components/services/translation.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', './mediaQueries-project.component.scss', './fillBtnStyles-project.component.scss']
})
export class ProjectComponent {
  translate = inject(TranslationService);

  gitBtnisHover: boolean = false;
  liveTestBtnisHover: boolean = false



  @Input() project = {
    image: 'join.png',
    title: 'Join',
    technologies: 'HTML | CSS | Javascript',
    description: "join-description",
    linkGithub: 'https://github.com/VincenzoRispoli/Join',
    linkLiveTest: 'https://elpolloloco.vincenzo-rispoli.de/',
  }

  onHover(link: string) {
    if (link == 'gitHub') {
      this.gitBtnisHover = true;
    } else {
      this.liveTestBtnisHover = true;

    }
  }

  onLeave(link: string) {
    if (link == 'gitHub') {
      this.gitBtnisHover = false;
    } else {
      this.liveTestBtnisHover = false

    }
  }
}
