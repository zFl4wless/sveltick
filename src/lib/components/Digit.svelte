<script>
	export let value = 0;
	export let limit = 9;

	const digitHeight = 64;
</script>

<div class="digit-container flex flex-col transition-transform duration-500 ease-in-out"
		 style="transform: translateY(-{value * digitHeight}px);">
	{#each Array(limit + 1) as _, i}
		<span class="digit">{i}</span>
	{/each}
</div>