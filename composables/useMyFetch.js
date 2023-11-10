export const useMyFetch = (url, opt) => {
  const accessToken = useCookie("accessToken");
  console.log("opt: ", opt);

  const headers = {
    ...opt.headers,
  };
  if (accessToken.value) {
    Object.assign(headers, {
      Authorization: "Bearer " + accessToken.value,
    });
  }
  // ssr服务器向api服务器传递客户端真实ip
  if (process.server) {
    Object.assign(
      headers,
      useRequestHeaders(["x-forwarded-for", "x-real-ip", "user-agent"])
    );
  }

  opt.headers = headers;
  return useFetch(url, {
    baseURL: "http://127.0.0.1:9900", // 你的接口地址
    ...opt,
    // async onResponse({ request, response, options }) {
    async onResponse() {
      console.log("[fetch response]");
    },
    // async onResponseError({ request, response, options }) {
    async onResponseError({ response }) {
      if (response.status == 401) {
        // const showLogin = useShowLogin();
        // showLogin.value = true;
      }
      console.log("[fetch response error]");
    },

    // async onRequest({ request, options }) {
    async onRequest() {
      console.log("[fetch request]");
    },
    // async onRequestError({ request, options, error }) {
    async onRequestError({ error }) {
      console.log("[fetch request error]", error);
    },
  });
};

export const userInfoFetch = (opt) => {
  return useMyFetch("/user/info", opt);
};
export const userNameFetch = (opt) => {
  return useMyFetch("/user/name", opt);
};
//  更多接口....
