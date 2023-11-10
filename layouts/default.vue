<template>
  <div class="layout">
    <NavBar :title="title"></NavBar>
    <main class="main-c">
      <slot />
    </main>
    <Footer :links="footer"></Footer>
  </div>
</template>

<script setup>
const { find } = useStrapi4()
const { link_lists: footer, title: title } = await find('layouts')
</script>

<style lang="scss" scoped >
.layout {
  .main-c {
    min-height: calc(100vh - 64px);
  }
}
</style>
