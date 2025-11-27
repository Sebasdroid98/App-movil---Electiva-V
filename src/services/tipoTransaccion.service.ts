import { getDB } from "./database/database";

export const TipoTransaccionService = {
  async crear(nombre: string) {
    const db = getDB();
    return await db.runAsync(
      "INSERT INTO tipo_transaccion (nombre) VALUES (?)",
      [nombre]
    );
  },

  async obtenerTodos() {
    const db = getDB();
    return await db.getAllAsync("SELECT * FROM tipo_transaccion ORDER BY nombre ASC");
  },
};
