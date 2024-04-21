import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 
  isClicked:boolean = false

  @Output() hamburgerClicked = new EventEmitter<boolean>();

  onHamburgerClick() {
    this.isClicked = !this.isClicked;
    this.hamburgerClicked.emit(this.isClicked);
  }
}
