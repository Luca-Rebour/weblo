import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LucideAngularModule, Code, Zap, Users } from 'lucide-angular';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

// Configuración de la aplicación
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(LucideAngularModule.pick({ Code, Zap, Users })),
    // Otros proveedores que necesites
  ],
};

// Bootstrap de la aplicación
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));