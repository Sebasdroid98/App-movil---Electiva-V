export type Transaction = {
  id: number;
  tipo: 'ingreso' | 'egreso';
  descripcion: string;
  valor: number;
};

let transacciones: Transaction[] = [];

export function agregarTransaccion(t: Transaction) {
  transacciones.push(t);
}

export function obtenerTransacciones() {
  return transacciones;
}

export function obtenerTotales() {
  const ingresos = transacciones
    .filter((t) => t.tipo === 'ingreso')
    .reduce((total, t) => total + t.valor, 0);

  const egresos = transacciones
    .filter((t) => t.tipo === 'egreso')
    .reduce((total, t) => total + t.valor, 0);

  return { ingresos, egresos };
}
