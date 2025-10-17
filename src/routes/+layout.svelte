<script lang="ts">
	import '../app.css';
	import { PUBLIC_SITE_DOMAIN, PUBLIC_SITE_URL } from '$env/static/public';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="{PUBLIC_SITE_URL}">
	<meta property="og:image" content="{PUBLIC_SITE_URL}/thumbnail.png">

	<!-- Twitter Meta Tags -->
	<meta property="twitter:domain" content="{PUBLIC_SITE_DOMAIN}">
	<meta property="twitter:url" content="{PUBLIC_SITE_URL}">
	<meta name="twitter:image" content="{PUBLIC_SITE_URL}/thumbnail.png">
</svelte:head>

<!-- Background -->
<div id='surface'></div>
<div id='caustics'></div>
<div id='bg'></div>
<div id='sun'>
	<div id='sun_layer1'></div>
	<div id='sun_layer2'></div>
	<div id='sun_layer3'></div>
</div>

{@render children?.()}
