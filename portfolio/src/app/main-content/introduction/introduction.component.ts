import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {

  isHover:boolean = false;

  onHover(){
    this.isHover = true
  }

  onLeave(){
    this.isHover = false
  }

}
