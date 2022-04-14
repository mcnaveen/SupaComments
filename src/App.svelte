<script>
  import AllComments from "./components/AllComments.svelte";
  import CommentBox from "./components/CommentBox.svelte";
  const postPath = window.location.pathname;
  const hostURL = window.location.host;
  export let appUrl;
  export let clickToLoad;

  const Props = {
    hostURL,
    postPath,
    clickToLoad,
  };
</script>

<main>
  {#if hostURL === appUrl}
    <CommentBox {...Props} />
    <AllComments {...Props} />
  {:else}
    <h1 class="text-6xl text-red-500 p-5">Unauthorized Website</h1>
  {/if}
</main>

<style>
</style>
