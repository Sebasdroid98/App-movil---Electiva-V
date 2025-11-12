export async function login({ email, password }: { email: string; password: string }) {
  await new Promise((resolve) => setTimeout(resolve, 800)); 
  if (password === '123456') {
    return { token: 'token-falso-123', user: { email } };
  }
  throw new Error('Credenciales inválidas. Usa la clave 123456');
}
