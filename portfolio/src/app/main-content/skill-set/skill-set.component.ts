import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/components/services/translation.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent implements OnInit {
  translate = inject(TranslationService)
  translationY: boolean[] = [];
  translationY2: boolean[] = [];

  ngOnInit() {
    this.skillSet.forEach(() => {
      this.translationY.push(false)
    })
  }

  skillSet = [
    { image: 'css.svg', tech: 'CSS' },
    { image: 'html.svg', tech: 'HTML' },
    { image: 'javascript.svg', tech: 'Javascript' },
    { image: 'typescript.svg', tech: 'Typescript' },
    { image: 'api.svg', tech: 'API' },
    { image: 'scrum.svg', tech: 'Scrum' },
    { image: 'angular.svg', tech: 'Angular' },
    { image: 'firebase.svg', tech: 'Firebase' },
    { image: 'material.svg', tech: 'Material Design' },
    { image: 'git.svg', tech: 'Git' }
  ];

  getTranslation(index: number) {
    this.translationY[index] = true;
  }

  getTranslationBack(index: number) {
    this.translationY[index] = false;
  }



}
