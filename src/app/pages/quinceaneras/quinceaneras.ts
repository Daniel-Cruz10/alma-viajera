import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ExperienciasService } from '../../core/services/experiencias';
import { Experiencia } from '../../core/models/experiencia';

@Component({
  selector: 'app-quinceaneras',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './quinceaneras.html',
  styleUrl: './quinceaneras.css'
})
export class Quinceaneras {

  experiencia: Experiencia | undefined;

  constructor(
    private experienciasService: ExperienciasService
  ) {
    this.experiencia =
      this.experienciasService.obtenerPorTipo('quinceaneras');
  }
}