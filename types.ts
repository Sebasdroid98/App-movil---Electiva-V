export type Transaction = {
  id: string; // puedes usar Date.now().toString() o uuid
  type: 'Ingreso' | 'Egreso';
  description: string;
  amount: number;
  date: string;
};