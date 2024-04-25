import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';


@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  projectsList = [
    {
      title: 'Join',
      image: 'join.png',
      technologies: 'HTML | CSS | Javascript',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      linkGithub: 'https://github.com/VincenzoRispoli/El-Pollo-Loco',
    },
    {
      title: 'El Pollo Loco',
      image: 'polloLoco.png',
      technologies: 'HTML | CSS | Javacript',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      linkGithub: 'https://github.com/VincenzoRispoli/El-Pollo-Loco'
    },
  ]
}
