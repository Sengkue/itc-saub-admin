<template>
    <div>
      <client-only placeholder="Loading...">
        <PieChart
          :chart-data="pieChartData"
          :chart-options="pieChartOptions"
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
        pieChartData: {
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
        pieChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'right'
            }
          }
        }
      };
    }
  };
  </script>