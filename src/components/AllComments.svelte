<script>
  import { supabase } from "../supabaseClient";
  import { commentsData } from "../stores.js";
  import { generateFromString } from "generate-avatar";
  export let postPath;
  let loading = true;
  export let loadMore;
  let enableLoadMore;

  export const comments = async () => {
    enableLoadMore = false;
    const { data, error } = await supabase
      .from("comments")
      .select()
      .order("created_at", { ascending: false })
      .filter("postURL", "in", `(${postPath})`)
      .filter("show", "is", true);

    commentsData.set(data);

    if (data) {
      loading = false;
    }

    if (error) {
      console.log(error);
    }
  };

  if (loadMore) {
    enableLoadMore = true;
  } else {
    enableLoadMore = false;
    comments();
  }
</script>

<main>
  <div class="mx-auto container">
    <div class="flex flex-wrap">
      <div class="rounded-lg w-3/4 p-4">
        <div class="w-full p-3">
          <h3 class="text-gray-700 text-2xl font-bold">User Comments</h3>
        </div>
        {#if enableLoadMore}
          <div class="w-full p-3">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              on:click={() => {
                comments();
              }}
            >
              Load User Comments
            </button>
          </div>
        {:else}
          <div class="w-full p-3">
            <div class="w-full p-3">
              {loading ? "Loading Comments..." : ""}
              {#each $commentsData as comment}
                <div class="flex text-gray-700 p-3">
                  <img
                    class="w-10 h-10 rounded-full mr-4"
                    src={`data:image/svg+xml;utf8,${generateFromString(
                      comment.email || comment.name
                    )}`}
                    alt="avatar"
                  />
                  <div class="text-sm">
                    <p class="font-bold">{comment.name}</p>
                    <p class="text-gray-600">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</main>

<style></style>
