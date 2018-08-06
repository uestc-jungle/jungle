<template>
  <div class="training-treding-container" ref="training-treding-container">
    <training-chart />
  </div>
</template>

<script>
export default {
  name: 'training-trending',
  methods: {
    enhance() {
      const container = this.$refs['training-treding-container']
      const clientWidth = document.documentElement.clientWidth

      const canvsWidth = Math.min(clientWidth, 740)

      container.style.width = `${canvsWidth}px`
    }
  },
  mounted() {
    this.enhance()
  }
}
</script>
