<script>
  export let data;
</script>

<ul>
  {#each data.blog_page as blog}
      <article>
        <h1>{blog.title}</h1>
        <h2>{blog.author}</h2>
        <h3>{blog.tags}</h3>
        <p>{blog.date}</p>
        <h2>{@html blog.rich_text}</h2>
        <p>{blog.summary}</p>
      </article>
  {/each}
</ul>


