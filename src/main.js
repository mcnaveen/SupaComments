import App from "./App.svelte";

let comments = document.getElementById("comments");
let appUrl = comments.getAttribute("data-url") || "localhost:8080";
let clickToLoad = comments.getAttribute("clickToLoad") || false;

const app = new App({
  target: comments,
  props: {
    appUrl: appUrl,
    clickToLoad: clickToLoad,
  },
});

export default app;
