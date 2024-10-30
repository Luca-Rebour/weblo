import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, FileIcon } from 'lucide-angular';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, LucideAngularModule, ServiciosComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weblo';
}
