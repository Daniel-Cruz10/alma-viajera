
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, tap } from 'rxjs';

import { TasaCambio } from '../models/tasa-cambio';

@Injectable({
  providedIn: 'root'
})
export class TasaCambioService {

  private apiUrl = 'https://co.dolarapi.com/v1/trm';

  // Tiempo de caché: 3 horas
  private tiempoCache = 3 * 60 * 60 * 1000;

  // Última tasa consultada
  private tasaGuardada: TasaCambio | null = null;

  private ultimaConsulta = 0;

  constructor(
    private http: HttpClient
  ) {}

  obtenerTRM(forzarActualizacion: boolean = false): Observable<TasaCambio> {

    // Verificar si ya tenemos una tasa guardada y vigente
    if (
      !forzarActualizacion &&
      this.tasaGuardada !== null &&
      (Date.now() - this.ultimaConsulta < this.tiempoCache)
    ) {
      return of(this.tasaGuardada);
    }

    // Consultar la API
    return this.http.get<TasaCambio>(this.apiUrl).pipe(

      tap(respuesta => {

        // Guardar únicamente una respuesta válida
        if (
          respuesta &&
          Number.isFinite(respuesta.valor) &&
          respuesta.valor > 0
        ) {

          this.tasaGuardada = respuesta;
          this.ultimaConsulta = Date.now();

        }

      })

    );

  }

}
