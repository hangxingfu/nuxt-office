<template>
  <Meta name="description" content="A Demo for 《深入浅出SSR官网开发指南》" />
  <Title>123 A Demo for 《深入浅出SSR官网开发指南》</Title>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
if (process.client) {
  const { initTheme } = useTheme()
  const theme = localStorage.getItem('theme') ?? useAppConfig().theme
  initTheme(theme)
  window.addEventListener(
    "storage",
    initTheme(localStorage.getItem('theme') ?? useAppConfig().theme)
  );
}


</script>

<style lang="scss">
@import "~/assets/style/main.scss";
</style>
