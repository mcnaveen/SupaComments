import App from "./App.svelte";

let comments = document.getElementById("comments");
let appUrl = comments.getAttribute("data-url") || "localhost:8080";
let loadMore = comments.getAttribute("loadmore") || false;

const app = new App({
  target: comments,
  props: {
    appUrl: appUrl,
    loadMore: loadMore,
  },
});

export default app;
