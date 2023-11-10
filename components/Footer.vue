<template>
  <div class="my-footer">

    <div class="my-footer_item" v-for="(item, index) in links.data" :key="index">
      <div class="title">{{ item.title }}</div>
      <div v-for="(i, ind) in item.links.data" :key="ind" class="link">
        <NuxtLink :to="i.path" target="_blank">
          {{ i.label }}
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  links: Object
})
</script>

<style lang="scss" scoped>
.my-footer {
  padding: 70px 140px;
  color: var(--primary-color);
  background-color: var(--footer-background-color);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  &_item {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 36rpx;
      font-weight: 500;
    }
  }
}
</style>
