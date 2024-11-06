import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  contactForm: FormGroup;
  responseMessage: string = '';
  success: boolean = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      texto: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('name', this.contactForm.get('name')?.value);
      formData.append('email', this.contactForm.get('email')?.value);
      formData.append('texto', this.contactForm.get('texto')?.value);

      this.contactService.sendContactForm(formData).subscribe(
        response => {
          if (response.status === 'success') {
            this.responseMessage = 'Mensaje enviado correctamente.';
            this.success = true;
            this.contactForm.reset();
          } else {
            this.success = false;
            this.responseMessage = 'Hubo un problema al enviar el mensaje.';
          }
          this.clearResponseMessageAfterDelay();
        },
        error => {
          console.error('Error al enviar el mensaje:', error);
          this.success = false;
          this.responseMessage = 'Hubo un problema al enviar el mensaje.';
          this.clearResponseMessageAfterDelay();
        }
      );
    }
  }

  private clearResponseMessageAfterDelay(): void {
    setTimeout(() => {
      this.responseMessage = '';
    }, 15000); // 15 segundos
  }
}