
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, timeout } from 'rxjs';

import { TasaCambio } from '../models/tasa-cambio';

@Injectable({
  providedIn: 'root'
})
export class TasaCambioService {

  private apiUrl = 'https://co.dolarapi.com/v1/trm';

  constructor(
    private http: HttpClient
  ) {}

  obtenerTRM(): Observable<TasaCambio> {
    return this.http.get<TasaCambio>(this.apiUrl).pipe(
      timeout({ first: 10000 })
    );
  }

}
