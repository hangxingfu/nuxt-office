<template>
  <div class="container">
    <div class="main">
      <h1 class="title">{{ data.title }}</h1>
      <p class="description">{{ data.description }}</p>

      <div class="grid">
        <div class="card" v-for="(item, index) in data.list" :key="index">
          <NuxtLink :to="item.link" target="_blank">
            <h2>{{ item.label }} &rarr;</h2>
            <p>{{ item.info }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const version = useStrapiVersion()
console.log(version);






const data = {
  title: "Hello SSR!",
  description: "A Demo for 《深入浅出SSR官网开发指南》",
  list: [
    {
      label: "文章1",
      info: "A test for article1",
      link: "http://localhost:3000/article/1",
    },
    {
      label: "文章2",
      info: "A test for article2",
      link: "http://localhost:3000/article/2",
    },
    {
      label: "文章3",
      info: "A test for article3",
      link: "http://localhost:3000/article/3",
    },
    {
      label: "文章4",
      info: "A test for article4",
      link: "http://localhost:3000/article/4",
    },
    {
      label: "文章5",
      info: "A test for article5",
      link: "http://localhost:3000/article/5",
    },
    {
      label: "文章6",
      info: "A test for article6",
      link: "http://localhost:3000/article/6",
    },
  ],
};
</script>

<style lang="scss"  scoped>
.container {
  padding: 0 2rem;

  .main {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      margin: 0;
      line-height: 1.15;
      font-size: 4rem;

      & a {
        color: #0070f3;
        text-decoration: none;
      }

      & a:hover,
      & a:focus,
      & a:active {
        text-decoration: underline;
      }

    }

    .title,
    .description {
      text-align: center;
    }

    .description {
      margin: 4rem 0;
      line-height: 1.5;
      font-size: 1.5rem;
    }

    .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 800px;

      .card {
        margin: 1rem;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        max-width: 300px;
        cursor: pointer;

        & a:hover,
        &:focus,
        &:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        & h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        & p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
