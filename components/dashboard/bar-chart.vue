<template>
    <div>
      <client-only placeholder="Loading...">
        <BarChart
          :chart-data="barChartData"
          :chart-options="barChartOptions"
          :height="430"
        />
      </client-only>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChartItem',
    data() {
      return {
        barChartData: {
          labels: ['NuVue', 'VueJit', 'IftShi', 'KoinVi', 'MegsWear', 'Millgh'],
          datasets: [
            {
              label: 'Visualization',
              data: [72, 131, 12, 3, 4, 55],
              backgroundColor: [
                'rgba(20, 255, 0, 0.85)',
                'rgba(200, 5, 0, 0.85)',
                'rgba(10, 220, 0, 0.85)',
                'rgba(2, 100, 0, 0.85)',
                'rgba(20, 55, 0, 0.85)',
                'rgba(120, 155, 0, 0.85)'
              ],
              borderColor: 'rgba(100, 155, 0, 1)',
              borderWidth: 0
            }
          ]
        },
        barChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      };
    }
  };
  </script>
  