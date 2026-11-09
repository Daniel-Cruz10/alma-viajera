export type TipoExperiencia = 'quinceaneras' | 'solteros';

export interface Experiencia {
  id: number;
  tipo: TipoExperiencia;
  slug: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  destino: string;
  fechaTexto: string;
  imagenPortada: string;
  galeria: string[];
  incluye: string[];
  actividades: string[];
}
