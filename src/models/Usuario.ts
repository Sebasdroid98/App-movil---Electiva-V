export interface Usuario {
  id: number;
  identificacion: string;
  nombres: string;
  apellidos: string;
  correo: string;
  clave: string;
  telefono?: string;
  acepta_terminos: number;
  fecha_registro: string;
  fecha_modificacion: string;
}
