import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IContactFormRequest } from '@shared/interfaces';
import { BASE_PATH_API } from '@shared/tokens';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  
  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_PATH_API) private basePathApi: string
  ) { } 

  public submitContactForm(data: IContactFormRequest): Observable<any> {
      return this.httpClient.post<any>(this.basePathApi, data)
  }

}
