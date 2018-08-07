<template>
  <div class="training-treding-container" ref="training-trending-container">
    <training-chart />
  </div>
</template>

<script>
export default {
  name: 'training-trending',
  methods: {
    enhance() {
      const container = this.$refs['training-trending-container']
      const clientWidth = document.documentElement.clientWidth

      const canvsWidth = Math.min(clientWidth*0.8, 740)

      container.style.width = `${canvsWidth}px`
    }
  },
  mounted() {
    this.enhance()
    window.addEventListener('resize', this.enhance)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.enhance)
  },
}
</script>
