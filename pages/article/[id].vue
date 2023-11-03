<template>
  <div>
    <h1>文章ID:{{ id }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const id = ref(route.params.id)
</script>

<style lang="scss" scoped></style>
