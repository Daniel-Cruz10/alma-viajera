import { CommonModule, registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

import { DestinosService } from '../../core/services/destinos';
import { TasaCambioService } from '../../core/services/tasa-cambio';
import { Destino } from '../../core/models/destino';
import { TasaCambio } from '../../core/models/tasa-cambio';

registerLocaleData(localeEsCo, 'es-CO');

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './destinos.html',
  styleUrl: './destinos.css'
})
export class Destinos implements OnInit {

  destinos: Destino[];

  // Información de la TRM
  trm = signal<TasaCambio | null>(null);

  cargandoTRM = signal(false);
  errorTRM = signal(false);

  constructor(
    private destinosService: DestinosService,
    private tasaCambioService: TasaCambioService
  ) {

    this.destinos = this.destinosService.obtenerTodos();

  }

  ngOnInit(): void {

    // Consultar la TRM al entrar a Destinos
    this.actualizarTRM();

  }

  actualizarTRM(): void {

    this.cargandoTRM.set(true);
    this.errorTRM.set(false);

    this.tasaCambioService
      .obtenerTRM()
      .pipe(finalize(() => {
        this.cargandoTRM.set(false);
      }))
      .subscribe({

        next: (respuesta) => {

          if (respuesta && respuesta.valor > 0) {

            this.trm.set(respuesta);

          } else {

            this.errorTRM.set(true);

          }

        },

        error: (error) => {

          console.error('Error al consultar la TRM:', error);
          this.errorTRM.set(true);

        }

      });

  }

}