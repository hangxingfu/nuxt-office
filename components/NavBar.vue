<template>
  <div class="nav-bar">
    <NuxtImg src="/log.svg" width="96" height="24" />
    <div class="theme-icon">
      <NuxtLink to="http://localhost:3001">
        {{ title }}
      </NuxtLink>&nbsp;
      <NuxtImg src="/theme_dark.png" width="20" height="20" @click="onSetTheme" />
    </div>
  </div>
</template>

<script setup>
defineProps({ title: String })

const { setTheme } = useTheme()
const onSetTheme = () => {
  setTheme();
  localStorage.setItem('theme', useAppConfig().theme)
}
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--navbar-background-color);
  color: var(--primary-color);
  backdrop-filter: blur(8px);
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.25rem;
  z-index: 100;
}

.theme-icon {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>

