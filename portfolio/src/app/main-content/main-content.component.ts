import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, AboveTheFoldComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
