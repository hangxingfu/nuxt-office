<template>
  <div class="nav-bar">
    <NuxtImg src="/log.svg" width="96" height="24" />
    <NuxtLink to="http://localhost:3001">
      Nuxt Demo
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsla(0, 0%, 100%, .5);
  backdrop-filter: blur(8px);
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 32px;
  z-index: 100;
  border-bottom: 1px solid rgb(203 213 225);
}

.text-black {
  --tw-text-opacity: 1;
  // color: #000;
  color: rgb(0 0 0/var(--tw-text-opacity));
}

:is(.dark .dark\:text-white) {
  --tw-text-opacity: 1;
  color: #fff;
  color: rgb(255 255 255/var(--tw-text-opacity));
}

.w-auto {
  width: auto;
}

.h-6 {
  height: 1.5rem;
}

.block {
  display: block;
}
</style>

