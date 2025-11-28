import { getDB } from "./database/database";

export const UsuarioService = {
  async crear(usuario: {
    identificacion: string;
    nombres: string;
    apellidos: string;
    correo: string;
    clave: string;
    telefono?: string;
    acepta_terminos: number;
  }) {
    const db = getDB();
    return await db.runAsync(
      `
      INSERT INTO usuario 
      (identificacion, nombres, apellidos, correo, clave, telefono, acepta_terminos)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        usuario.identificacion,
        usuario.nombres,
        usuario.apellidos,
        usuario.correo,
        usuario.clave,
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

  async actualizar(id: number, data: Partial<any>) {
    const db = getDB();

    const campos = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(", ");

    const valores = Object.values(data);

    return await db.runAsync(
      `UPDATE usuario SET ${campos}, fecha_modificacion = CURRENT_TIMESTAMP WHERE id = ?`,
      [...valores, id]
    );
  },

  async eliminar(id: number) {
    const db = getDB();
    return await db.runAsync("DELETE FROM usuario WHERE id = ?", [id]);
  },

  async obtenerPorCorreo(correo: string) {
    type User = {
      id: number;
      nombre: string;
      correo: string;
      clave: string;
    };

    const db = getDB();
    return await db.getFirstAsync<User|null>(
      "SELECT * FROM usuario WHERE correo = ? LIMIT 1",
      [correo]
    );
  },
};
