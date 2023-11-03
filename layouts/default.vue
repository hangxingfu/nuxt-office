<template>
  <div class="layout">
    <navbar-header></navbar-header>
    <main class="main-c">
      <slot />
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped >
.layout {
  .main-c {
    min-height: calc(100vh - 64px);
  }
}
</style>
