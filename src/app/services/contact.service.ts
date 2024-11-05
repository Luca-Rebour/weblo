import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost/weblo/mail.php';

  constructor(private http: HttpClient) {}

  sendContactForm(formData: FormData): Observable<string> {
    return this.http.post<string>(this.apiUrl, formData, { responseType: 'text' as 'json' });
  }
}
