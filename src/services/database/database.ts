import { openDatabaseAsync, SQLiteDatabase } from "expo-sqlite";

let db: SQLiteDatabase;

export const initDB = async () => {
  db = await openDatabaseAsync("mifinanza.db");

  await db.execAsync(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS usuario (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      identificacion TEXT NOT NULL,
      nombres TEXT NOT NULL,
      apellidos TEXT NOT NULL,
      correo TEXT NOT NULL,
      telefono TEXT,
      acepta_terminos INTEGER NOT NULL DEFAULT 0,
      fecha_registro TEXT DEFAULT CURRENT_TIMESTAMP,
      fecha_modificacion TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS tipo_transaccion (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS transaccion (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      descripcion TEXT,
      valor REAL NOT NULL,
      tipo_transaccion_id INTEGER NOT NULL,
      usuario_id INTEGER NOT NULL,
      fecha_registro TEXT DEFAULT CURRENT_TIMESTAMP,
      fecha_modificacion TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (tipo_transaccion_id) REFERENCES tipo_transaccion(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
      FOREIGN KEY (usuario_id) REFERENCES usuario(id)
        ON DELETE CASCADE ON UPDATE CASCADE
    );
  `);
};

export const getDB = () => db;
