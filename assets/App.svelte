<script>
    let counter = 0;

    function increment() {
        counter++;
    }
</script>

<section class="section">
    <div class="container">
        <h1 class="title">
            Hello World
        </h1>
        <p class="subtitle">
            My first website with <strong>Bulma</strong> and Svelte !
        </p>
        <button class="button is-primary" on:click={increment}>{counter} clicks</button>
    </div>
</section>
