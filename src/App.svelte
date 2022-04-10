<script>
  const postURL = window.location.pathname;
  const hostURL = window.location.host;
  import AllComments from "./components/AllComments.svelte";
  import CommentBox from "./components/CommentBox.svelte";
  const supaCommentHost = __api.env.SUPACOMMENT_HOST_URL;
</script>

<main>
  {#if hostURL === supaCommentHost}
    <CommentBox url={postURL} />
    <AllComments url={postURL} />
  {:else}
    <h1 class="text-6xl text-red-500 p-5">Unauthorized Website</h1>
  {/if}
</main>

<style>
</style>
