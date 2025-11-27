import { getDB } from "./database/database";

export const UsuarioService = {
  async crear(usuario: {
    identificacion: string;
    nombres: string;
    apellidos: string;
    correo: string;
    telefono?: string;
    acepta_terminos: number;
  }) {
    const db = getDB();
    return await db.runAsync(
      `
      INSERT INTO usuario 
      (identificacion, nombres, apellidos, correo, telefono, acepta_terminos)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [
        usuario.identificacion,
        usuario.nombres,
        usuario.apellidos,
        usuario.correo,
        usuario.telefono ?? null,
        usuario.acepta_terminos,
      ]
    );
  },

  async obtenerTodos() {
    const db = getDB();
    return await db.getAllAsync("SELECT * FROM usuario ORDER BY fecha_registro DESC");
  },

  async obtenerPorId(id: number) {
    const db = getDB();
    return await db.getFirstAsync("SELECT * FROM usuario WHERE id = ?", [id]);
  },
};
