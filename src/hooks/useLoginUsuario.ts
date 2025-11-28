import { useState } from "react";
import { UsuarioService } from "../services/usuario.service";
import { Usuario } from "../models/usuario";

export const useLoginUsuario = () => {
  const [loading, setLoading] = useState(false);

  const loginUsuario = async (correo: string, clave: string) => {
    setLoading(true);

    const user = await UsuarioService.obtenerPorCorreo(correo);

    setLoading(false);

    if (!user) {
      return { ok: false, message: "Usuario no encontrado" };
    }

    // if (user?.clave !== clave) {
    //   return { ok: false, message: "Contraseña incorrecta" };
    // }

    return { ok: true, user };
  };

  return { loginUsuario, loading };
};
