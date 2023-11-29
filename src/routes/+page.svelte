<script>
  export let data;
</script>

<h1 class="text-5xl text-center p-4"> Jessica's Journeys </h1>
  {#each data.blog_page as blog}
      <article class="p-4 m-6 border border-gray-300 rounded-md">
        <h1 class="text-4xl font-bold mb-2">{blog.title}</h1>
        <h2 class="text-lg text-gray-600 mb-2">Author: {blog.author}</h2>
        <p class="text-gray-500 mb-2">{blog.date}</p>
        <div class="mb-2">
          <span class="text-blue-500">Tags: {blog.tags}</span>
        </div>
        <h2 class="text-3xl mb-4">{@html blog.rich_text}</h2>
        <p class="text-gray-700">{blog.summary}</p>
      </article>
  {/each}




