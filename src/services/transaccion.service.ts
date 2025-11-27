import { getDB } from "./database/database";

export const TransaccionService = {
  async crear(data: {
    descripcion?: string;
    valor: number;
    tipo_transaccion_id: number;
    usuario_id: number;
  }) {
    const db = getDB();

    return await db.runAsync(
      `
      INSERT INTO transaccion (
        descripcion,
        valor,
        tipo_transaccion_id,
        usuario_id
      )
      VALUES (?, ?, ?, ?)
      `,
      [
        data.descripcion ?? null,
        data.valor,
        data.tipo_transaccion_id,
        data.usuario_id,
      ]
    );
  },

  async obtenerPorUsuario(usuario_id: number) {
    const db = getDB();

    return await db.getAllAsync(
      `
      SELECT t.*, tt.nombre AS tipo_nombre
      FROM transaccion t
      INNER JOIN tipo_transaccion tt 
        ON t.tipo_transaccion_id = tt.id
      WHERE usuario_id = ?
      ORDER BY fecha_registro DESC
      `,
      [usuario_id]
    );
  },
};
