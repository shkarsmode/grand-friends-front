import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IContactFormRequest } from '@shared/interfaces';
import { BASE_PATH_API, VALIDATION_API_KEY, VALIDATION_PATH_API } from '@shared/tokens';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  
  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_PATH_API) private basePathApi: string,
    @Inject(VALIDATION_PATH_API) private validationPathApi: string,
    @Inject(VALIDATION_API_KEY) private validationApiKey: string,
  ) { } 

  // https://grand-friends-back.vercel.app/api/test-message
  // https://grand-friends-back.vercel.app/api/auth/test-mail
  public submitContactForm(data: IContactFormRequest): Observable<any> {
      return this.httpClient.post<any>(this.basePathApi+'/auth/test-mail', data)
  }

  public verifyPhoneNumber(
    countryCode: string,
    number: string): Observable<any> {

      const params = new HttpParams()
        .set('countryCode', countryCode)
        .set('number', number)
        .set('key', this.validationApiKey);

      return this.httpClient.get<any>(this.validationPathApi + '/phone-number-validate', {
          params
      })
  }

  public verifyEmail(email: string): Observable<any> {
      const params = new HttpParams()
        .set('emailAddress', email)
        .set('key', this.validationApiKey );

      return this.httpClient.get<any>(this.validationPathApi + '/email-verify', {
          params
      })
  }

}
