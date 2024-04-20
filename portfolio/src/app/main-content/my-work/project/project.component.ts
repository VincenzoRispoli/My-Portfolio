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
  rowReverse = 'row-reverse';
  row = 'row';
  isHover: boolean = false;

  @Input() project = {
    image: 'join.png',
    title: 'Join',
    technologies: 'HTML | CSS | Javascript',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. '
  }

  onHover() {
    this.isHover = true;
  }

  onLeave() {
    this.isHover = false;
  }
}
