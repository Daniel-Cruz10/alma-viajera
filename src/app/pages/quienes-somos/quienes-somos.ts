import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ContenidoService } from '../../core/services/contenido';
import { Beneficio } from '../../core/models/beneficio';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.css'
})
export class QuienesSomos {

  beneficios: Beneficio[];

  constructor(
    private contenidoService: ContenidoService
  ) {
    this.beneficios =
      this.contenidoService.obtenerBeneficios();
  }
}