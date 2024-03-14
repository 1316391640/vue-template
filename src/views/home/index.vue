<template>
  <div class="box">这里是home页面{{ state.count }}</div>
</template>

<script setup>
  import { reactive } from 'vue'

  const state = reactive({
    count: 1,
  })
</script>

<style lang="scss" scoped>
  .box {
  }
</style>
