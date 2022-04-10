<script>
  import { supabase } from "../supabaseClient";
  export let url;
  let name;
  let email;
  let comment;
  let success = false;

  const checkAndInsert = async () => {
    if (name && comment) {
      const { data, error } = await supabase.from("comments").insert({
        postURL: url,
        name: name,
        email: email,
        comment: comment,
        show: true,
      });

      if (data) {
        success = true;
        alert("Commented Succesfully");
        name = "";
        email = "";
        comment = "";
        window.location.reload();
      }

      if (error) {
        console.log(error);
      }
    } else {
      alert("Please fill in all fields");
    }
  };
</script>

<main>
  <!-- Create a comment box with name, email and comment textarea with tailwindcss -->
  <div class="mx-auto container">
    <div class="flex flex-wrap">
      <div class="bg-gray-100 shadow-lg rounded-lg w-full p-4 m-5">
        <div class="w-full p-3">
          <h1 class="text-2xl text-gray-500">What do you think?</h1>
        </div>
        <div class="w-full p-3">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Name"
            bind:value={name}
            required
          />
        </div>
        <div class="w-full p-3">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            placeholder="Email (Optional)"
            bind:value={email}
          />
        </div>
        <div class="w-full p-3">
          <textarea
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            rows="5"
            id="comment"
            type="text"
            placeholder="Write your Comment"
            bind:value={comment}
          />
        </div>
        <div class="w-full p-3">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            on:click={() => {
              checkAndInsert();
            }}
          >
            Submit Comment!
          </button>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  
</style>
