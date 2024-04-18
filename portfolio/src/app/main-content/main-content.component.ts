import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, AboveTheFoldComponent, IntroductionComponent, SkillSetComponent,MyWorkComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
