import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ExperienciasService } from '../../core/services/experiencias';
import { Experiencia } from '../../core/models/experiencia';

@Component({
  selector: 'app-solteros',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './solteros.html',
  styleUrl: './solteros.css'
})
export class Solteros {

  experiencia: Experiencia | undefined;

  constructor(
    private experienciasService: ExperienciasService
  ) {
    this.experiencia =
      this.experienciasService.obtenerPorTipo('solteros');
  }
}