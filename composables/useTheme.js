export default () => {
  let appConfig = useAppConfig();

  function setTheme() {
    updateAppConfig({ theme: appConfig.theme === "light" ? "dark" : "light" });
    document.getElementsByTagName("html")[0].dataset.theme = appConfig.theme;
  }
  function initTheme(theme) {
    document.getElementsByTagName("html")[0].dataset.theme = theme;
  }

  return { setTheme, initTheme };
};
