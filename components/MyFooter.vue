<template>
  <div class="my-footer">
    <div class="" v-for="(item, index) in links" :key="index">
      <NuxtLink :to="item.url" target="_blank">
        {{ item.text }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>

const { find } = useStrapi()
const res = find('links')
console.log(res);

const links = [
  { text: '掘金', url: 'https://juejin.cn/' },
  { text: '知乎', url: 'https://www.zhihu.com/' }
]
</script>

<style lang="scss" scoped>
.my-footer {
  padding: 70px 145px;
  background-color: #f4f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
