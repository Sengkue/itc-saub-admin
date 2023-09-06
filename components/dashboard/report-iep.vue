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
        // Use an array of month names as labels
        lineChartData: {
          labels: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
          ],
          datasets: [
            {
              label: 'Income',
              data: [1000, 1500, 800, 2000, 1200, 1800, 2500, 3000, 2200, 1800, 1400, 2000],
              borderColor: 'rgba(20, 255, 0, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(20, 255, 0, 1)',
              pointBorderColor: 'rgba(20, 255, 0, 1)',
              pointRadius: 4,
            },
            {
              label: 'Expenses',
              data: [600, 750, 400, 1000, 800, 1000, 1300, 1500, 1100, 900, 700, 1000],
              borderColor: 'rgba(255, 0, 0, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(255, 0, 0, 1)',
              pointBorderColor: 'rgba(255, 0, 0, 1)',
              pointRadius: 4,
            },
            {
              label: 'Profit',
              data: [400, 750, 400, 1000, 400, 800, 1200, 1500, 1100, 900, 700, 1000],
              borderColor: 'rgba(0, 0, 255, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(0, 0, 255, 1)',
              pointBorderColor: 'rgba(0, 0, 255, 1)',
              pointRadius: 4,
            },
          ],
        },
        lineChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Month',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Amount',
              },
            },
          },
        },
      };
    },
  };
  </script>
  