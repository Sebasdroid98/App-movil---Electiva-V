import { useState } from "react";
import { UsuarioService } from "../services/usuario.service";

type User = {
  id: number;
  nombre: string;
  correo: string;
  clave: string;
};

export const useLoginUsuario = () => {
  const [loading, setLoading] = useState(false);

  const loginUsuario = async (correo: string, clave: string) => {
    setLoading(true);

    const user:any = await UsuarioService.obtenerPorCorreo(correo);

    setLoading(false);

    if (!user) {
      return { status: false, message: "Usuario no encontrado" };
    }

    if (user?.clave !== clave) {
      return { status: false, message: "Contraseña incorrecta" };
    }

    return { status: true, user };
  };

  return { loginUsuario, loading };
};
