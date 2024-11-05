import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  bajar(): void {
    const targetElement = document.getElementById('servicios');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
