import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LucideAngularModule, Code, Zap, Users, Mail } from 'lucide-angular';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';

// Bootstrap de la aplicación
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));