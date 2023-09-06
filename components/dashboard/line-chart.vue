<template>
    <div>
      <client-only placeholder="Loading...">
        <LineChart
          :chart-data="lineChartData"
          :chart-options="lineChartOptions"
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
        lineChartData: {
          labels: ['NuVue', 'VueJit', 'IftShi', 'KoinVi', 'MegsWear', 'Millgh'],
          datasets: [
            {
              label: 'Visualization',
              data: [72, 131, 12, 3, 4, 55],
              backgroundColor: 'rgba(20, 255, 0, 0.2)',
              borderColor: 'rgba(20, 255, 0, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(20, 255, 0, 1)',
              pointBorderColor: 'rgba(20, 255, 0, 1)',
              pointRadius: 4
            }
          ]
        },
        lineChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'X-Axis Label'
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Y-Axis Label'
              }
            }
          }
        }
      };
    }
  };
  </script>
  