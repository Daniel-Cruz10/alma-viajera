import { Injectable } from '@angular/core';
import { Destino } from '../models/destino';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  private destinos: Destino[] = [
    {
      id: 1,
      nombre: 'San Andrés',
      slug: 'san-andres',
      descripcion:
        'Descubre el mar de los siete colores, sus playas de arena blanca y la belleza natural del Caribe colombiano.',
      imagenPrincipal: '/images/destinos/san-andres.jpg',
      precioCOP : 1500000,
      caracteristicas: [
        'Playas paradisíacas',
        'Mar de los siete colores',
        'Experiencias acuáticas'
      ]
    },
    {
      id: 2,
      nombre: 'Cartagena',
      slug: 'cartagena',
      descripcion:
        'Recorre calles llenas de historia, arquitectura colonial y rincones únicos frente al mar Caribe.',
      imagenPrincipal: '/images/destinos/cartagena.jpg',
      precioCOP : 1200000,
      caracteristicas: [
        'Ciudad amurallada',
        'Cultura e historia',
        'Atardeceres inolvidables'
      ]
    },
    {
      id: 3,
      nombre: 'Santa Marta',
      slug: 'santa-marta',
      descripcion:
        'Conecta con la naturaleza en un destino donde las montañas, las playas y la aventura se encuentran.',
      imagenPrincipal: '/images/destinos/santa-marta.jpg',
      precioCOP : 1250000,
      caracteristicas: [
        'Paisajes naturales',
        'Playas del Caribe',
        'Aventura y descanso'
      ]
    },
    {
      id: 4,
      nombre: 'La Guajira',
      slug: 'la-guajira',
      descripcion:
        'Explora paisajes extraordinarios, desiertos junto al mar y la riqueza cultural del norte colombiano.',
      imagenPrincipal: '/images/destinos/la-guajira.jpg',
      precioCOP : 1500000,
      caracteristicas: [
        'Paisajes desérticos',
        'Cultura regional',
        'Aventura fotográfica'
      ]
    },
    {
      id: 5,
      nombre: 'Europa',
      slug: 'europa',
      descripcion:
        'Imagina un recorrido por ciudades históricas, arquitectura fascinante y paisajes llenos de encanto.',
      imagenPrincipal: '/images/destinos/europa.jpg',
      precioCOP : 12000000,
      caracteristicas: [
        'Ciudades históricas',
        'Arquitectura y cultura',
        'Experiencias internacionales'
      ]
    },
    {
      id: 6,
      nombre: 'Egipto',
      slug: 'egipto',
      descripcion:
        'Déjate sorprender por una cultura milenaria, monumentos extraordinarios y paisajes inolvidables.',
      imagenPrincipal: '/images/destinos/egipto.jpg',
      precioCOP : 10000000,
      caracteristicas: [
        'Historia milenaria',
        'Monumentos emblemáticos',
        'Cultura y exploración'
      ]
    }
  ];

  obtenerTodos(): Destino[] {
    return this.destinos;
  }

  obtenerPorSlug(slug: string): Destino | undefined {
    return this.destinos.find(destino => destino.slug === slug);
  }
}