import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, ],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  contactForm: FormGroup;
  responseMessage: string = '';

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('name', this.contactForm.get('name')?.value);
      formData.append('email', this.contactForm.get('email')?.value);

      this.contactService.sendContactForm(formData).subscribe(
        response => {
          this.responseMessage = response;
        },
        error => {
          console.error('Error al enviar el mensaje:', error);
          this.responseMessage = 'Hubo un problema al enviar el mensaje.';
        }
      );
    }
  }
}
