import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://weblo.uy/mail.php';

  constructor(private http: HttpClient) {}

  sendContactForm(formData: FormData): Observable<{ status: string }> {
    return this.http.post<{ status: string }>(this.apiUrl, formData);
  }
}