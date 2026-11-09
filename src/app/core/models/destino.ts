export interface Destino {
  id: number;
  nombre: string;
  slug: string;
  descripcion: string;
  imagenPrincipal: string;
  caracteristicas: string[];
  precioCOP: number;
  imagenPromocional?: string;
}