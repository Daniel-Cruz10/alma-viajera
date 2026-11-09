import { Injectable } from '@angular/core';
import { Beneficio } from '../models/beneficio';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  private beneficios: Beneficio[] = [
    {
      id: 1,
      titulo: 'Experiencias únicas',
      descripcion:
        'Creamos propuestas para que cada viaje se convierta en un recuerdo inolvidable.',
      icono: '✈'
    },
    {
      id: 2,
      titulo: 'Pasión por viajar',
      descripcion:
        'Descubrimos nuevos lugares y compartimos la emoción de conocer el mundo.',
      icono: '🌴'
    },
    {
      id: 3,
      titulo: 'Momentos memorables',
      descripcion:
        'Buscamos que cada experiencia tenga algo especial para recordar.',
      icono: '✦'
    }
  ];

  obtenerBeneficios(): Beneficio[] {
    return this.beneficios;
  }
}