import React, { createContext, useState } from 'react';
import { useLoginUsuario } from '../hooks/useLoginUsuario';
import { Alert } from 'react-native';

export const AuthContext = createContext<any>(null);

export type User = {
  email:string;
  password:string;
}

export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState<User>({email: '', password: ''});
  const { loginUsuario } = useLoginUsuario();

  async function login(usuario: User) {
    const result = await loginUsuario(usuario.email, usuario.password);
    if (!result.status) {
      Alert.alert("Error", result.message);
      return;
    }
    setUser(usuario);
  }

  function logout() {
    setUser({email: '', password: ''});
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
