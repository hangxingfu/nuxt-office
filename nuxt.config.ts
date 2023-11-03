// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxtjs/eslint-module", "@nuxt/image", "@nuxtjs/strapi"],
  eslint: {
    lintOnStart: false, // 项目启动时检查所有匹配文件，太慢，谨慎开启。
  },
  strapi: {
    devtools: true,
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  routeRules: {
    "/": { prerender: true },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/_colors.scss" as *;',
        },
      },
    },
  },
});
