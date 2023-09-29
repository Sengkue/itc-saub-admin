<template>
  <div class="chart-item">
    <p class="moving-text">This text will move from left to right.</p>
  </div>
</template>

<script>
export default {
  name: 'ChartItem',
  data() {
    return {
      // You can add data properties here if needed
    };
  },
  methods: {
    // You can define methods here if needed
  },
};
</script>

<style lang="scss" scoped>
@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.chart-item {
  // Add more styling for the chart item container if needed
}

.moving-text {
  animation: moveRight 10s linear infinite;
  // Add more styling for the moving text if needed
}
</style>
