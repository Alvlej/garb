<script>
    import { page } from '$app/stores';
    $: path = $page.url.pathname;
</script>

<header class="site-header">
    <div class="container">
        <a class="logo" href="/">Startsida</a>
        <nav>
            <a class:active={path === '/'} href="/">Hem</a>
            <a class:active={path === '/loggbok'} href="/loggbok">Loggbok</a>
            <a class:active={path === '/contact'} href="/contact">Kontakt</a>

            
        </nav>
    </div>
</header>

{#if path === '/'}
    <section class="hero">
        <div class="container">
            <h1>
                <img src="https://cdn-icons-png.flaticon.com/512/7922/7922993.png" alt="Energidryckskollen" class="hero-logo" />
                Energydryckskollen
            </h1>
            <p>Allt du behöver för energidrycker!</p>
            <a class="cta" href="/about">Läs mer</a>
        </div>
    </section>
{/if}

<main class="container">
    <slot />
</main>

<footer class="site-footer">
    <div class="container">
    </div>
</footer>

<style>
    :global(body) {
        margin: 0;
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        color: #0f172a;
        background: #f8fafc;
    }

    .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 1rem;
    }

    .site-header {
        background: #fff;
        border-bottom: 1px solid #e6eef5;
    }

    .site-header .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        font-weight: 700;
        color: #0f172a;
        text-decoration: none;
        font-size: 1.125rem;
    }

    nav a {
        margin-left: 1rem;
        color: #334155;
        text-decoration: none;
        padding: .35rem .5rem;
        border-radius: 6px;
    }

    nav a:hover { background: #f1f5f9; }

    .active {
        background: #e6f0ff;
        color: #0b5cff;
    }

    .hero {
        background: linear-gradient(180deg, #f8fbff, #fff);
        border-bottom: 1px solid #e6eef5;
    }

    .hero h1 {
        margin: 0 0 .25rem 0;
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    }

    .hero-logo {
    height: 48px; 
    width: auto;
    display: inline-block;
}


    .hero p {
        margin: 0 0 1rem 0;
        color: #475569;
    }

    .cta {
        display: inline-block;
        background: #0b5cff;
        color: white;
        padding: .5rem .75rem;
        border-radius: 6px;
        text-decoration: none;
    }

    main.container {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        min-height: 60vh;
        background: transparent;
    }

    .site-footer {
        background: #fff;
        border-top: 1px solid #e6eef5;
        text-align: center;
        padding: .75rem 0;
        color: #64748b;
    }

    @media (max-width: 600px) {
        .site-header .container, .hero .container {
            padding-left: .75rem;
            padding-right: .75rem;
        }
        nav a { margin-left: .5rem; }
    }
</style>