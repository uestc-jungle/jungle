<template>
  <div class="training-table-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'training-table',
}
</script>

<style lang="stylus">
.training-table-container
  white-space: nowrap;
</style>
