import { openDatabaseAsync, SQLiteDatabase } from "expo-sqlite";

let db: SQLiteDatabase;

export const initDB = async () => {
  db = await openDatabaseAsync("mifinanza.db");

  // 1. Activar foreign keys (solo una sentencia)
  await db.execAsync("PRAGMA foreign_keys = ON");

  // 2. Crear tabla usuario
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS usuario (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      identificacion TEXT NOT NULL,
      nombres TEXT NOT NULL,
      apellidos TEXT NOT NULL,
      correo TEXT NOT NULL UNIQUE,
      clave TEXT NOT NULL,
      telefono TEXT,
      acepta_terminos INTEGER NOT NULL DEFAULT 0,
      fecha_registro TEXT DEFAULT CURRENT_TIMESTAMP,
      fecha_modificacion TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 3. Crear tabla tipo_transaccion
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tipo_transaccion (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL
    )
  `);

  // 4. Crear tabla transaccion
  await db.execAsync(`
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
    )
  `);

  // Ejecutar seeder
  await seedUsers();
  await seedTipoTransaccion();

  console.log("Base de datos inicializada correctamente");
};

export const getDB = () => db;

/* ------------------------------------------------------------------ */
/*                           SEEDERS                                  */
/* ------------------------------------------------------------------ */

const seedUsers = async () => {
  // Verificar si ya existe un usuario
  const existingUser = await db.getFirstAsync(
    "SELECT id FROM usuario LIMIT 1"
  );

  if (existingUser) {
    console.log("Seed: ya existe un usuario, no se insertará el de prueba");
    return;
  }

  // Insertar usuario de ejemplo
  await db.runAsync(
    `
      INSERT INTO usuario (
        identificacion, nombres, apellidos, correo, telefono, clave, acepta_terminos
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [
      "1234567890",
      "Usuario",
      "Demo",
      "demo@correo.com",
      "3001234567",
      "123456",        // clave de ejemplo
      1
    ]
  );

  console.log("Usuario de prueba insertado correctamente");
};

const seedTipoTransaccion = async () => {
  const tipoCount = await db.getFirstAsync<{ total: number }>(
    "SELECT COUNT(*) as total FROM tipo_transaccion"
  );

  if (!tipoCount || tipoCount.total === 0) {
    await db.runAsync(`
      INSERT INTO tipo_transaccion (nombre) VALUES
      ('Ingreso'),
      ('Egreso');
    `);

    console.log("Seeder: tipos de transacción insertados");
  }
};
