export default function useChartData() {
  const chartData = [
    {
      name: 'Ingresos 1',
      population: 45,
      color: '#00C49F',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Egresos 1',
      population: 25,
      color: '#FF4D4D',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Balance',
      population: 30,
      color: '#00BCD4',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
  ];

  return { chartData };
}