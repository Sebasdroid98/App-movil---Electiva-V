import { useState, useEffect, useCallback } from "react";
import { UsuarioService } from "../services/usuario.service";

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

/**
 * Este hook maneja operaciones relacionadas con usuarios para usarlo desde pantallas
 * Debido a que maneja estados y efectos secundarios.
 * Para consultas puntuales a la base de datos, usar UsuarioService directamente.
 */
export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(false);

  // ---------------------------------------------------------
  // Cargar todos los usuarios
  const cargarUsuarios = useCallback(async () => {
    setLoading(true);
    const data = await UsuarioService.obtenerTodos();
    setUsuarios(data as Usuario[]);
    setLoading(false);
  }, []);

  // ---------------------------------------------------------
  // Cargar un solo usuario
  const cargarUsuario = useCallback(async (id: number) => {
    setLoading(true);
    const data = await UsuarioService.obtenerPorId(id);
    setUsuario((data ?? null) as Usuario | null);
    setLoading(false);
  }, []);

  // ---------------------------------------------------------
  // Crear usuario
  const crearUsuario = useCallback(async (data: Omit<Usuario, "id" | "fecha_registro" | "fecha_modificacion">) => {
    setLoading(true);
    const result = await UsuarioService.crear(data);
    await cargarUsuarios(); // refresca lista
    setLoading(false);
    return result.lastInsertRowId;
  }, [cargarUsuarios]);

  // ---------------------------------------------------------
  // Actualizar usuario
  const actualizarUsuario = useCallback(async (id: number, data: Partial<Usuario>) => {
    setLoading(true);
    await UsuarioService.actualizar(id, data);
    await cargarUsuarios();
    setLoading(false);
  }, [cargarUsuarios]);

  // ---------------------------------------------------------
  // Eliminar usuario
  const eliminarUsuario = useCallback(async (id: number) => {
    setLoading(true);
    await UsuarioService.eliminar(id);
    await cargarUsuarios();
    setLoading(false);
  }, [cargarUsuarios]);

  // ---------------------------------------------------------
  // Cargar de inicio
  useEffect(() => {
    cargarUsuarios();
  }, []);

  return {
    usuarios,
    usuario,
    loading,

    cargarUsuarios,
    cargarUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
  };
};
