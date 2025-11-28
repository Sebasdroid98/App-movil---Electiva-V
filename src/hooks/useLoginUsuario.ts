import { useState } from "react";
import { UsuarioService } from "../services/usuario.service";

export const useLoginUsuario = () => {
  const [usuario, setUsuario] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (correo: string) => {
    setLoading(true);
    setError(null);

    const data = await UsuarioService.obtenerPorCorreo(correo);

    if (!data) {
      setError("Usuario no encontrado");
      setUsuario(null);
    } else {
      setUsuario(data);
    }

    setLoading(false);
    return data;
  };

  return {
    usuario,
    loading,
    error,
    login,
  };
};
