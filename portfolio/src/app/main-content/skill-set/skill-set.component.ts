import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  skillSet1 = [
    { image: 'css.svg', tech: 'CSS' },
    { image: 'html.svg', tech: 'HTML' },
    { image: 'javascript.svg', tech: 'Javascript' },
    { image: 'typescript.svg', tech: 'Typescript' },
    { image: 'api.svg', tech: 'API' }
  ]
  skillSet2 = [
    { image: 'scrum.svg', tech: 'Scrum' },
    { image: 'angular.svg', tech: 'Angular' },
    { image: 'firebase.svg', tech: 'Firebase' },
    { image: 'material.svg', tech: 'Material Design' },
    { image: 'git.svg', tech: 'Git' }
  ]

}
