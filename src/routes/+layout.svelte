<script lang="ts">
	import '../app.css';
	import { PUBLIC_SITE_DOMAIN, PUBLIC_SITE_URL } from '$env/static/public';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="{PUBLIC_SITE_URL}">
	<meta property="og:image" content="{PUBLIC_SITE_URL}/api/og-image">

	<!-- Twitter Meta Tags -->
	<meta property="twitter:domain" content="{PUBLIC_SITE_DOMAIN}">
	<meta property="twitter:url" content="{PUBLIC_SITE_URL}">
	<meta name="twitter:image" content="{PUBLIC_SITE_URL}/api/og-image">
</svelte:head>

{@render children?.()}
