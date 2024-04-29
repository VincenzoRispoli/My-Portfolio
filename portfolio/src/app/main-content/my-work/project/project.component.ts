import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  gitBtnisHover: boolean = false;
  liveTestBtnisHover: boolean = false

  @Input() project = {
    image: 'join.png',
    title: 'Join',
    technologies: 'HTML | CSS | Javascript',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    linkGithub: 'https://github.com/VincenzoRispoli/El-Pollo-Loco',
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
