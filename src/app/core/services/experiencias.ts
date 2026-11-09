import { Injectable } from '@angular/core';
import {
  Experiencia,
  TipoExperiencia
} from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  private experiencias: Experiencia[] = [

    {
      id: 1,
      tipo: 'quinceaneras',
      slug: 'quinceaneras',
      titulo: '¡TUS QUINCE NO SE BAILAN, SE VIVEN!',
      subtitulo: 'Escapada de lujo para quinceañeras',
      descripcion:
        'Una propuesta para celebrar una etapa inolvidable con nuevas amistades, paisajes caribeños y momentos especiales.',
      destino: 'San Andrés, Colombia',
      fechaTexto: '30 NOV AL 04 DIC 2026',
      imagenPortada: '/images/quinceaneras/portada.jpg',
      galeria: [
        '/images/destinos/san-andres.jpg',
        '/images/destinos/cartagena.jpg',
        '/images/destinos/santa-marta.jpg',
        '/images/destinos/la-guajira.jpg'
      ],
      incluye: [
        'Información del plan turístico',
        'Acompañamiento durante la experiencia',
        'Actividades grupales',
        'Momentos especiales para celebrar'
      ],
      actividades: [
        'Exploración de playas',
        'Recorridos turísticos',
        'Actividades recreativas',
        'Espacios para compartir y celebrar'
      ]
    },

    {
      id: 2,
      tipo: 'solteros',
      slug: 'solteros',
      titulo: 'TU PRÓXIMA HISTORIA EMPIEZA AQUÍ',
      subtitulo: 'Viaja, conoce y conecta',
      descripcion:
        'Una propuesta de viajes grupales para personas que quieren conocer nuevos lugares, compartir experiencias y crear conexiones auténticas.',
      destino: 'Cartagena y el Caribe',
      fechaTexto: 'PRÓXIMAS SALIDAS POR CONFIRMAR',
      imagenPortada: '/images/solteros/portada.jpg',
      galeria: [
        '/images/destinos/cartagena.jpg',
        '/images/destinos/san-andres.jpg',
        '/images/destinos/santa-marta.jpg',
        '/images/destinos/la-guajira.jpg'
      ],
      incluye: [
        'Información de la experiencia grupal',
        'Espacios para compartir con otros viajeros',
        'Propuestas de actividades recreativas',
        'Acompañamiento informativo del plan'
      ],
      actividades: [
        'Recorridos por destinos turísticos',
        'Planes de playa y naturaleza',
        'Actividades grupales',
        'Nuevas amistades y recuerdos'
      ]
    }

  ];

  obtenerTodas(): Experiencia[] {
    return this.experiencias;
  }

  obtenerPorTipo(
    tipo: TipoExperiencia
  ): Experiencia | undefined {
    return this.experiencias.find(
      experiencia => experiencia.tipo === tipo
    );
  }
}