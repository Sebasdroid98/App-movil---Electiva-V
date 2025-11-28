export default function useChartData() {
  const chartData = [
    { name: 'Ingresos', population: 45, color: '#00C49F' },
    { name: 'Egresos', population: 25, color: '#FF4D4D' },
    { name: 'Balance', population: 30, color: '#00BCD4' },
  ];

  return { chartData };
}
